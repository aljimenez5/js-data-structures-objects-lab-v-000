const driver = { person: drives }

function updateDriverWithKeyAndValue(driver, key, value) {
   Object.assign({}, driver, {[key]: value})
}