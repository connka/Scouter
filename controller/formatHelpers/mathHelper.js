module.exports.sumArray = (rowData) => {
  const rowKeys = Object.keys(rowData);
  const currentKeys = rowKeys.slice(3, 9);
  const outObj = {};
  currentKeys.forEach((Keyelement) => {
    const sumArr = {
      'MC': 0,
      'TNG': 0,
      'DCR': 0,
    };
    if (Keyelement !== 'GAS') {
      rowData[Keyelement].forEach((InnerKeyelement) => {
        sumArr.MC += parseInt(InnerKeyelement.MC);
        sumArr.TNG += parseInt(InnerKeyelement.TNG);
        sumArr.DCR += parseInt(InnerKeyelement.DCR);
      });
      outObj[Keyelement] = sumArr;
    } else if (Keyelement === 'GAS') {
      const gasOutArr = [];
      rowData[Keyelement].forEach((gasArrayelement) => {
        const gasSumArr = {
          'MC': 0,
          'TNG': 0,
          'DCR': 0,
        };
        if (gasArrayelement['Simple Cycle']) {
          gasArrayelement['Simple Cycle'].forEach((gasRowelement) => {
            gasSumArr.MC += parseInt(gasRowelement.MC);
            gasSumArr.TNG += parseInt(gasRowelement.TNG);
            gasSumArr.DCR += parseInt(gasRowelement.DCR);
          });
          gasOutArr.push({'Simple Cycle': gasSumArr});
        } else if (gasArrayelement['Cogeneration']) {
          gasArrayelement['Cogeneration'].forEach((gasRowelement) => {
            gasSumArr.MC += parseInt(gasRowelement.MC);
            gasSumArr.TNG += parseInt(gasRowelement.TNG);
            gasSumArr.DCR += parseInt(gasRowelement.DCR);
          });
          gasOutArr.push({'Cogeneration': gasSumArr});
        } else if (gasArrayelement['Combined Cycle']) {
          gasArrayelement['Combined Cycle'].forEach((gasRowelement) => {
            gasSumArr.MC += parseInt(gasRowelement.MC);
            gasSumArr.TNG += parseInt(gasRowelement.TNG);
            gasSumArr.DCR += parseInt(gasRowelement.DCR);
          });
          gasOutArr.push({'Combined Cycle': gasSumArr});
        }
      });
      outObj.GAS = gasOutArr;
    }
  });
  return {SUMS: outObj};
};
