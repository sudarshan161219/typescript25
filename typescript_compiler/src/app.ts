interface Keyboard {
  type: string;
  modelID: number;
}

const createKeyboard = (modelID: number): Keyboard => {
  return { type: "Keyoard", modelID };
};


console.log("h")