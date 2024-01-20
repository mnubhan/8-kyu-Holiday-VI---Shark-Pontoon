function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
 sharkSpeed = dolphin ? sharkSpeed/2 : sharkSpeed
 return youSpeed/pontoonDistance > sharkSpeed/sharkDistance ? "Alive!": "Shark Bait!"
}
