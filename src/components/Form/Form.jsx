import { Formik } from 'formik';
import { SearchBar, Input, Label, ButtonSearch } from './Form.styled';
import { HiSearch } from "react-icons/hi";
import PropTypes from 'prop-types';

export const SearchForm = ({onSubmit}) => {

    const initialValues = {
        value: ''
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <SearchBar>
                <Label>
                    <Input type="search" 
                        name="value"             
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos">
                    </Input>
                
                    <ButtonSearch type="submit"><HiSearch size={26}/></ButtonSearch>
                </Label>
                </SearchBar>
        </Formik>
    )
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;