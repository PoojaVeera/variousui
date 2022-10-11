import React from "react";
import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  BackgroundImage,
} from "@mantine/core";
import { useForm } from "@mantine/form";

export const Page1 = () => {
  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <div className="Page1">
      <BackgroundImage src="https://media.istockphoto.com/photos/triangular-abstract-background-picture-id624878906?b=1&k=20&m=624878906&s=170667a&w=0&h=57IoHbozH8_2NOiZyx7dRZcWkrhhUnzW1aRHk43_nWg=">
        <Box>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput
              withAsterisk
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />

            <Checkbox
              mt="md"
              label="I agree to sell my privacy"
              {...form.getInputProps("termsOfService", { type: "checkbox" })}
            />

            <Group position="right" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </Box>{" "}
      </BackgroundImage>
    </div>
  );
};
