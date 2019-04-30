 intersection(i1). intersection(i2).
lane(l1..2).
road(r1..2).

%Lane1and2areonroad1
inroad(l1..2,r1).

leftof(l1,l2).

%l1andl2westend->i1eaststart
westend(l1..2,i1).intersection(i1..2).
 lane(l1). lane(l2).
road(r1..2).

%Lane1and2areonroad1
inroad(l1..2,r1).

leftof(l1,l2).

%l1andl2westend->i1eaststart
westend(l1..2,i1).intersection(i1..2).
lane(l1..2).
 road(r1). road(r2).

%Lane1and2areonroad1
inroad(l1..2,r1).

leftof(l1,l2).

%l1andl2westend->i1eaststart
westend(l1..2,i1).intersection(i1..2).
lane(l1..2).
road(r1..2).

%Lane1and2areonroad1
 inroad(l1,r1). inroad(l2,r1).

leftof(l1,l2).

%l1andl2westend->i1eaststart
westend(l1..2,i1).intersection(i1..2).
lane(l1..2).
road(r1..2).

%Lane1and2areonroad1
inroad(l1..2,r1).

leftof(l1,l2).

%l1andl2westend->i1eaststart
 westend(l1,i1). westend(l2,i1).