function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
 sharkSpeed = dolphin ? sharkSpeed/2 : sharkSpeed
 return youSpeed/pontoonDistance > sharkSpeed/sharkDistance ? "Alive!": "Shark Bait!"
}

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if(dolphin){
    sharkSpeed /= 2;
  }
  return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? "Alive!" : "Shark Bait!";
}

shark = (pD, sD, yS, sS, d) => yS / pD  > sS / sD / (d ? 2 : 1) ? "Alive!" : "Shark Bait!";
