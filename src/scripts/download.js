const str = JSON.stringify(
  [...document.querySelectorAll(".myInfoTable > tbody > tr")].map((row) =>
    [...row.children].map((td) => td.innerText).filter(Boolean)
  )
);
const a = document.createElement("a");
a.href = URL.createObjectURL(new Blob([str], { type: "application/json" }));
a.download = "data.json";
a.click();
