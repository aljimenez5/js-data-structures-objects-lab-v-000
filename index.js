const driver = { person: "drives" }

function updateDriverWithKeyAndValue(driver, key, value) {
   return Object.assign({}, driver, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {[key]: value})
}

function deleteFromDriverByKey(driver, key) {
  
   const dupObject = Object.assign({}, driver)
   delete dupObject[key]
}