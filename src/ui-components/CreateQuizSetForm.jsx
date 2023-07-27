/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { QuizSet } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CreateQuizSetForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    subject: "",
    level: "",
    numberOfQuiz: "",
    numberOfAttempt: "",
    lng: "",
  };
  const [subject, setSubject] = React.useState(initialValues.subject);
  const [level, setLevel] = React.useState(initialValues.level);
  const [numberOfQuiz, setNumberOfQuiz] = React.useState(
    initialValues.numberOfQuiz
  );
  const [numberOfAttempt, setNumberOfAttempt] = React.useState(
    initialValues.numberOfAttempt
  );
  const [lng, setLng] = React.useState(initialValues.lng);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setSubject(initialValues.subject);
    setLevel(initialValues.level);
    setNumberOfQuiz(initialValues.numberOfQuiz);
    setNumberOfAttempt(initialValues.numberOfAttempt);
    setLng(initialValues.lng);
    setErrors({});
  };
  const validations = {
    subject: [],
    level: [],
    numberOfQuiz: [
      {
        type: "GreaterThanNum",
        numValues: [0],
        validationMessage: "The value must be greater than 0",
      },
    ],
    numberOfAttempt: [],
    lng: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          subject,
          level,
          numberOfQuiz,
          numberOfAttempt,
          lng,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new QuizSet(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CreateQuizSetForm")}
      {...rest}
    >
      <TextField
        label="Subject"
        descriptiveText=""
        isRequired={false}
        isReadOnly={false}
        placeholder="Math"
        value={subject}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              subject: value,
              level,
              numberOfQuiz,
              numberOfAttempt,
              lng,
            };
            const result = onChange(modelFields);
            value = result?.subject ?? value;
          }
          if (errors.subject?.hasError) {
            runValidationTasks("subject", value);
          }
          setSubject(value);
        }}
        onBlur={() => runValidationTasks("subject", subject)}
        errorMessage={errors.subject?.errorMessage}
        hasError={errors.subject?.hasError}
        {...getOverrideProps(overrides, "subject")}
      ></TextField>
      <TextField
        label="Level"
        isRequired={false}
        isReadOnly={false}
        placeholder="third grade in elementary school"
        value={level}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              subject,
              level: value,
              numberOfQuiz,
              numberOfAttempt,
              lng,
            };
            const result = onChange(modelFields);
            value = result?.level ?? value;
          }
          if (errors.level?.hasError) {
            runValidationTasks("level", value);
          }
          setLevel(value);
        }}
        onBlur={() => runValidationTasks("level", level)}
        errorMessage={errors.level?.errorMessage}
        hasError={errors.level?.hasError}
        {...getOverrideProps(overrides, "level")}
      ></TextField>
      <TextField
        label="Number of quiz"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={numberOfQuiz}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              subject,
              level,
              numberOfQuiz: value,
              numberOfAttempt,
              lng,
            };
            const result = onChange(modelFields);
            value = result?.numberOfQuiz ?? value;
          }
          if (errors.numberOfQuiz?.hasError) {
            runValidationTasks("numberOfQuiz", value);
          }
          setNumberOfQuiz(value);
        }}
        onBlur={() => runValidationTasks("numberOfQuiz", numberOfQuiz)}
        errorMessage={errors.numberOfQuiz?.errorMessage}
        hasError={errors.numberOfQuiz?.hasError}
        {...getOverrideProps(overrides, "numberOfQuiz")}
      ></TextField>
      <TextField
        label="Number of attempt"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={numberOfAttempt}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              subject,
              level,
              numberOfQuiz,
              numberOfAttempt: value,
              lng,
            };
            const result = onChange(modelFields);
            value = result?.numberOfAttempt ?? value;
          }
          if (errors.numberOfAttempt?.hasError) {
            runValidationTasks("numberOfAttempt", value);
          }
          setNumberOfAttempt(value);
        }}
        onBlur={() => runValidationTasks("numberOfAttempt", numberOfAttempt)}
        errorMessage={errors.numberOfAttempt?.errorMessage}
        hasError={errors.numberOfAttempt?.hasError}
        {...getOverrideProps(overrides, "numberOfAttempt")}
      ></TextField>
      <TextField
        label="Lng"
        isRequired={false}
        isReadOnly={false}
        value={lng}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              subject,
              level,
              numberOfQuiz,
              numberOfAttempt,
              lng: value,
            };
            const result = onChange(modelFields);
            value = result?.lng ?? value;
          }
          if (errors.lng?.hasError) {
            runValidationTasks("lng", value);
          }
          setLng(value);
        }}
        onBlur={() => runValidationTasks("lng", lng)}
        errorMessage={errors.lng?.errorMessage}
        hasError={errors.lng?.hasError}
        {...getOverrideProps(overrides, "lng")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
