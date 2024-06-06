import { FormEvent } from "react";

function handleInputZero(event: FormEvent<HTMLInputElement>) {
  const inputElement = event.target as HTMLInputElement;
  const inputValue = inputElement?.value;

  if (inputValue === "" || inputValue === "0") {
    inputElement.value = ""; // Clear the input
  } else if (inputValue.startsWith("0")) {
    inputElement.value = parseInt(inputValue, 10).toString(); // Remove leading zero
  }
}

export default handleInputZero;
