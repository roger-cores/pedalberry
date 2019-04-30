 intersection(i1). intersection(i2).
lane(l1..4).
road(r1..2).
parkspot(p1..2).

%parkspot1toleftofroad1
pleftof(p1,r1).

%Lane1and2areonroad1
inroad(l1..2,r1).

%Lane3and4areonroad2
inroad(l3..4,r2).

leftof(l1,l2).

%l1andl2westend->i1eaststart
westend(l1..2,i1).

%l3andl4westend->i1eaststart
weststart(l3..4,i1).
intersection(i1..2).
 lane(l1). lane(l2). lane(l3). lane(l4).
road(r1..2).
parkspot(p1..2).

%parkspot1toleftofroad1
pleftof(p1,r1).

%Lane1and2areonroad1
inroad(l1..2,r1).

%Lane3and4areonroad2
inroad(l3..4,r2).

leftof(l1,l2).

%l1andl2westend->i1eaststart
westend(l1..2,i1).

%l3andl4westend->i1eaststart
weststart(l3..4,i1).
intersection(i1..2).
lane(l1..4).
 road(r1). road(r2).
parkspot(p1..2).

%parkspot1toleftofroad1
pleftof(p1,r1).

%Lane1and2areonroad1
inroad(l1..2,r1).

%Lane3and4areonroad2
inroad(l3..4,r2).

leftof(l1,l2).

%l1andl2westend->i1eaststart
westend(l1..2,i1).

%l3andl4westend->i1eaststart
weststart(l3..4,i1).
intersection(i1..2).
lane(l1..4).
road(r1..2).
 parkspot(p1). parkspot(p2).

%parkspot1toleftofroad1
pleftof(p1,r1).

%Lane1and2areonroad1
inroad(l1..2,r1).

%Lane3and4areonroad2
inroad(l3..4,r2).

leftof(l1,l2).

%l1andl2westend->i1eaststart
westend(l1..2,i1).

%l3andl4westend->i1eaststart
weststart(l3..4,i1).
intersection(i1..2).
lane(l1..4).
road(r1..2).
parkspot(p1..2).

%parkspot1toleftofroad1
pleftof(p1,r1).

%Lane1and2areonroad1
 inroad(l1,r1). inroad(l2,r1).

%Lane3and4areonroad2
inroad(l3..4,r2).

leftof(l1,l2).

%l1andl2westend->i1eaststart
westend(l1..2,i1).

%l3andl4westend->i1eaststart
weststart(l3..4,i1).
intersection(i1..2).
lane(l1..4).
road(r1..2).
parkspot(p1..2).

%parkspot1toleftofroad1
pleftof(p1,r1).

%Lane1and2areonroad1
inroad(l1..2,r1).

%Lane3and4areonroad2
 inroad(l3,r2). inroad(l4,r2).

leftof(l1,l2).

%l1andl2westend->i1eaststart
westend(l1..2,i1).

%l3andl4westend->i1eaststart
weststart(l3..4,i1).
intersection(i1..2).
lane(l1..4).
road(r1..2).
parkspot(p1..2).

%parkspot1toleftofroad1
pleftof(p1,r1).

%Lane1and2areonroad1
inroad(l1..2,r1).

%Lane3and4areonroad2
inroad(l3..4,r2).

leftof(l1,l2).

%l1andl2westend->i1eaststart
 westend(l1,i1). westend(l2,i1).

%l3andl4westend->i1eaststart
weststart(l3..4,i1).
intersection(i1..2).
lane(l1..4).
road(r1..2).
parkspot(p1..2).

%parkspot1toleftofroad1
pleftof(p1,r1).

%Lane1and2areonroad1
inroad(l1..2,r1).

%Lane3and4areonroad2
inroad(l3..4,r2).

leftof(l1,l2).

%l1andl2westend->i1eaststart
westend(l1..2,i1).

%l3andl4westend->i1eaststart
 weststart(l3,i1). weststart(l4,i1).
