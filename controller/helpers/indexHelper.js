module.exports.svgFormatter = (data) => {
  const outData = data;
  console.log(data)
  // The required structrue for svg
  const outTable = {
    'name': 'TABLE', 'children':
  [
    {'name': 'COAL', 'children': []},
    {'name': 'HYDRO', 'children': []},
    {'name': 'WIND', 'children': []},
    {'name': 'BIOMASS AND OTHER', 'children': []},
    {'name': 'GAS', 'children': [
      {'name': 'Simple Cycle', 'children': []},
      {'name': 'Cogeneration', 'children': []},
      {'name': 'Combined Cycle', 'children': []},
    ]},
  ],
  };
  for (let i = 0; i < outTable.children.length; i++) {
    if (outTable.children[i].name === 'GAS') {
      for (let j=0; j < outTable.children[4].children.length; j++) {
        // Target the gas table
        const targetTable = outTable.children[4].children[j].name;
        const currentTable = outData['GAS'][j][targetTable];
        // Loop gas elements into outTable
        currentTable.forEach((tableEle) => {
          outTable.children[4].children[j].children.push({'name': tableEle.ASSET, 'size': parseInt(tableEle.TNG)});
        });
      };
    } else if (
      outTable.children[i].name === 'COAL' ||
    outTable.children[i].name === 'HYDRO' ||
    outTable.children[i].name === 'WIND' ||
    outTable.children[i].name === 'BIOMASS AND OTHER'
    ) {
      // Loop through the fuel table information
      const targetTable = outTable.children[i].name;
      const currentTable = outData[0][targetTable];
      // Loop fuel table information into appropriate element
      currentTable.forEach((tableEle) => {
        outTable.children[i].children.push({'name': tableEle.ASSET, 'size': parseInt(tableEle.TNG)});
      });
    }
  };
  return outTable;
};
