// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function(el){
    console.log(el.name)
  })
}
function logDriversByHometown(drivers, hometown){
  logDriverNames(drivers.filter(driver => driver.hometown === hometown))
}
function driversByRevenue(drivers){
  drivers.sort(function(a,b){
    return a.revenue - b.revenue
  })
}
