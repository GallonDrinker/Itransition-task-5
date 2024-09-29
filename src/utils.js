export const generateRecord = (index, region, errorRate, seed) => {
    const lookupTables = {
      USA: { names: ['John', 'Jane'], surnames: ['Doe', 'Smith'], cities: ['New York', 'Los Angeles'], phoneCodes: ['+1'] },
      Poland: { names: ['Jan', 'Anna'], surnames: ['Kowalski', 'Nowak'], cities: ['Warsaw', 'Krakow'], phoneCodes: ['+48'] },
      Georgia: { names: ['Giorgi', 'Lasha'], surnames: ['Beridze', 'Giorgadze'], cities: ['Tbilisi', 'Batumi'], phoneCodes: ['+995'] }
    };
  
    const name = `${lookupTables[region].names[Math.floor(Math.random() * lookupTables[region].names.length)]} ${
      lookupTables[region].names[Math.floor(Math.random() * lookupTables[region].names.length)]
    } ${lookupTables[region].surnames[Math.floor(Math.random() * lookupTables[region].surnames.length)]}`;
  
    const address = `${lookupTables[region].cities[Math.floor(Math.random() * lookupTables[region].cities.length)]}, Street ${
      Math.floor(Math.random() * 100 + 1)
    }`;
  
    const phone = `${lookupTables[region].phoneCodes[0]} ${Math.floor(1000000000 + Math.random() * 9000000000)}`;
  
    let record = { index, identifier: seed, name, address, phone };
  
    return applyError(record, errorRate);
  };
  
  export const applyError = (record, errorRate) => {
    if (errorRate === 0) return record;
  
    const typesOfErrors = ['delete', 'add', 'swap'];
  
    // Only apply errors to string fields (like name, address, and phone)
    Object.keys(record).forEach((field) => {
      if (typeof record[field] === 'string') {
        for (let i = 0; i < errorRate; i++) {
          const errorType = typesOfErrors[Math.floor(Math.random() * typesOfErrors.length)];
  
          switch (errorType) {
            case 'delete':
              if (record[field].length > 1) {
                // Delete a random character
                const indexToDelete = Math.floor(Math.random() * record[field].length);
                record[field] = record[field].slice(0, indexToDelete) + record[field].slice(indexToDelete + 1);
              }
              break;
  
            case 'add':
              // Add a random character at a random position
              const randomChar = String.fromCharCode(Math.floor(Math.random() * 26) + 97); // Add a random lowercase letter
              const indexToAdd = Math.floor(Math.random() * (record[field].length + 1));
              record[field] = record[field].slice(0, indexToAdd) + randomChar + record[field].slice(indexToAdd);
              break;
  
            case 'swap':
              if (record[field].length > 1) {
                // Swap two adjacent characters
                const arr = record[field].split('');
                const indexToSwap = Math.floor(Math.random() * (arr.length - 1));
                [arr[indexToSwap], arr[indexToSwap + 1]] = [arr[indexToSwap + 1], arr[indexToSwap]];
                record[field] = arr.join('');
              }
              break;
  
            default:
              break;
          }
        }
      }
    });
  
    return record;
  };
  
  
  export const generateData = (count, region, errorRate, seed, startingIndex = 0) => {
    let records = [];
    for (let i = 0; i < count; i++) {
      // Adjust the index to be continuous based on the starting index
      const record = generateRecord(startingIndex + i + 1, region, errorRate, seed + i);
      records.push(record);
    }
    return records;
  };
  
  