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
    <BackgroundImage src="https://media.istockphoto.com/photos/starry-galaxy-elements-of-this-image-furnished-by-nasa-picture-id472563456?k=20&m=472563456&s=612x612&w=0&h=78CkY99PkeYmbs6RfnnJZgTholrh0epnBjvz-uvYIcg=">
      <Box sx={{ maxWidth: 300 }} mx="auto">
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
  );
};
