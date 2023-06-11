import { Component } from "react";
import fetchImages from "helpers/api";
import SearchForm from "../Form/Form";
import ImageList from "components/ImageList/ImageList";
import LoadMore from "components/LoadMore/LoadMore";
import ErrorMessage from "components/ErrorMessage/ErrorMessage";
import Loader from "components/Loader/Loader";
import { Gallery } from "./App.styled";

class App extends Component {

  abortCtrl;

  state = {
    value: '',
    page: 1,
    images: [],
    isLoading: false,
    isButtonShow: false,
    isError: null,
  }

  componentDidUpdate(_, prevState) {

    const {value, page} = this.state;

    if (prevState.value !== value || prevState.page !== page) {
      this.getImages(value, page)
    }
  }

  getImages = async (value, page) => {

    if (this.abortCtrl) {
      this.abortCtrl.abort();
    }

    this.abortCtrl = new AbortController();

    this.setState({
      isLoading: true
    })

    try {
      const {totalHits, hits} = await fetchImages(value, page, this.abortCtrl);

      if (!hits.length) {
        this.setState({
          isButtonShow: false,
          isError: 'Oops! Something went wrong! Try reloading this page'
        })
        return;
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        isButtonShow: true,
        isError: null
      }))

      if (page * 40 > totalHits && totalHits) {
        this.setState({
          isButtonShow: false
        })
      }
    } catch (error) {
      if (error.code !== 'ERR_CANCELED') {
        this.setState({
          isError: 'Oops! Something went wrong! Try reloading this page'
        })}
    } finally {
      this.setState({
        isLoading: false
      })
    }
  }

  hendeleSubmit = ({value}, {resetForm}) => {
    console.log(value);

    if (!value.trim()) {
      this.setState({
        isButtonShow: false,
        images: [],
        isError: "Sorry, you didn't enter your search term, please try again"
      })
      return;
    }

    if (this.state.value === value) {
      return;
    }

    this.setState(() => ({
      value: value,
      page: 1,
      images: [],
      isLoading: false,
      isButtonShow: false,
      error: null
    }))

    resetForm();
  }

  handlePage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))
  }

  render() {
    const {images, isButtonShow, isError, isLoading} = this.state;

  return (
      <Gallery>
        <SearchForm
          onSubmit={this.hendeleSubmit}
        />

        {images && <ImageList images={images}/>}
        {isError && <ErrorMessage>{isError}</ErrorMessage>}
        {isLoading && <Loader/>}
        {isButtonShow && !isLoading && <LoadMore onClick={this.handlePage}/>}

      </Gallery>
    )
  }
};

export default App;
