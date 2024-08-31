import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { BsMap } from 'react-icons/bs';
import css from './SideBarForm.module.css';
import { useId } from 'react';
import icons from '../../../assets/sprite.svg';

const validationSchema = Yup.object({
  location: Yup.string(),
  equipment: Yup.string(),
  type: Yup.string(),
});

const SideBarForm = () => {
  const values = { location: '', equipment: [], type: '' };
  const id = useId();

  const handleSubmit = async (values, actions) => {
    onFilter({ location: values.location });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={values}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className={css.containerLocation}>
          <h3 className={css.textLocation}>Location</h3>
          <div className={css.containerIcon}>
            <Field
              className={css.inputLocation}
              type="text"
              id={`location-${id}`}
              name="location"
              placeholder="Ukraine, Kyiv"
            />
            <BsMap
              className={css.iconLocation}
              width={20}
              height={20}
            />
          </div>
        </div>

        <p className={css.filtersText}>Filters</p>
        <h3 className={css.filtersTitle}>
          Vehicle equipment
        </h3>
        <Field
          type="checkbox"
          name="equipment"
          value="ac"
          id={`equipment-${id}`}
        />
        <label>
          <svg width={32} height={32}>
            <use href={`${icons}#icon-ac`}></use>
          </svg>
          AC
        </label>
      </Form>
    </Formik>
  );
};

export default SideBarForm;
