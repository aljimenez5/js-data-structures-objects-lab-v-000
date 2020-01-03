const driver = { person: "drives" }

function updateDriverWithKeyAndValue(driver, key, value) {
   return Object.assign({}, driver, {[key]: value})
}

function destruvtivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {[key]: value})
}