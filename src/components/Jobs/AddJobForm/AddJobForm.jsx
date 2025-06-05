import { Button, Card } from "@radix-ui/themes";
import { Form } from "radix-ui";
import "./AddJobForm.css";
import AddJobFormSubmit from "./AddJobFormSubmit";

export default function AddJobForm() {
  return (
    <Card id="AddJobFormCard">
      <Form.Root id="AddJobForm" action={AddJobFormSubmit}>
        <Form.Field name="company">
          <div>
            <Form.Label className="AddJobFormLabel">Company</Form.Label>
          </div>
          <Form.Control asChild>
            <input type="text"></input>
          </Form.Control>
        </Form.Field>
        <Form.Field name="job_title">
          <div>
            <Form.Label className="AddJobFormLabel">Job Title</Form.Label>
          </div>
          <Form.Control asChild>
            <input type="text"></input>
          </Form.Control>
        </Form.Field>
        <Form.Field name="salary">
          <div>
            <Form.Label className="AddJobFormLabel">Salary</Form.Label>
          </div>
          <Form.Control asChild>
            <input
              type="number"
              data-type="currency"
              pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
            ></input>
          </Form.Control>
        </Form.Field>
        <Form.Field name="link">
          <div>
            <Form.Label className="AddJobFormLabel">Link</Form.Label>
          </div>
          <Form.Control asChild>
            <input type="text"></input>
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <Button>Add Job</Button>
        </Form.Submit>
      </Form.Root>
    </Card>
  );
}
