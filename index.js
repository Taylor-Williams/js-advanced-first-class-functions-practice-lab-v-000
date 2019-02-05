// Code your solution in this file!
const logDriverNames = function(drivers){
  drivers.forEach(function(el){
    console.log(el.name)
  })
}
const logDriversByHometown = function(drivers, hometown){
  logDriverNames(drivers.filter(driver => driver.hometown === hometown))
}
const driversByRevenue = function(drivers){
  return drivers.slice().sort(function(a,b){
    return a.revenue - b.revenue
  })
}
const driversByName = function(drivers){
  return drivers.slice().sort(function(a,b){
    return a.localeCompare(b)
  })
}
