var eligibileBatch = [];
var year = new Date().getFullYear();
for (let i = 0; i < 3; i++) {
  eligibileBatch.push({ title: year, value: year });
  year--;
}
export default eligibileBatch;
