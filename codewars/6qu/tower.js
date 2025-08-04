function towerBuilder(nFloors) {
  let tower=[];
  let floor = '';
  for(let i=1;i<=nFloors;i++){
    for(let j=1;j<=i;j++){
      floor+='*'
    }
    tower.push(floor)
  }
  return tower;
}
console.log(towerBuilder(3));