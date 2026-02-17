import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";

export default function CMSDemonstration() {
  return (
    <>
      <Form>
        <FormGroup>
          <FormLabel>Featured Image</FormLabel>
          <FormControl type="file"></FormControl>
          <div className="row mt-3 mb-4">
            <div className="col">
              <h3 className="fs-6">Horizontal</h3>
              <img
                src="/Featured Image Sizes/imgs/pexels-veeterzy-38136.jpg"
                className="img-fluid img-preview-horizontal mb-3"
                alt="Tree"
              />
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#edit-img"
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#change-img"
              >
                Change
              </button>
            </div>
          </div>
        </FormGroup>
      </Form>
    </>
  );
}
