function formatResponse(text: string) {
  text = text.toLowerCase();
  text = text.replace(/i don't know/gi, "idk");
  text = text.replace(/\byou\b/gi, "u");
  text = text.replace(/it's/gi, "its");
  text = text.replace(/\byour\b/gi, "ur");
  text = text.replace(/let me know/gi, "lmk");
  text = text.replace(/hit me up/gi, "hmu");
  text = text.replace(/in my opinion/gi, "imo");
  text = text.replace(/\bpeople\b/gi, "ppl");
  text = text.replace(/\byou're\b/gi, "ur");
  text = text.replace(/\bhow about u\b/gi, "hbu");
  text = text.replace(/\bai language model\b/gi, "regular human");
  text = text.replace(/\ban regular human\b/gi, "a regular human");
  text = text.replace(/\bsorry\b/gi, Math.random() < 0.5 ? "sry" : "srry");
  text = text.replace(
    /\.$/,
    Math.random() < 0.33 ? " lol" : Math.random() < 0.5 ? " lmao" : " "
  );
  text = text.replace(
    /([?!\.])$/,
    Math.random() < 0.33 ? " lol" : Math.random() < 0.5 ? " lmao" : " "
  );
  text = text.replace(/before/g, "b4");
  text = text.replace(/about/g, "abt");
  text = text.replace(/are/g, "r");

  return text;
}

function saveToLocalStorage(name: string, data: any) {
  const jsonData = JSON.stringify(data);
  localStorage.setItem(name, jsonData);
}

function getLocalStorage(name: string) {
  let jsonData = localStorage.getItem(name);
  if (!jsonData) return;
  return JSON.parse(jsonData);
}

export { formatResponse, saveToLocalStorage, getLocalStorage };
