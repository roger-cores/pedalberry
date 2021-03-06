 intersection(i1). intersection(i2). intersection(i3). intersection(i4).
 lane(l1). lane(l2). lane(l3). lane(l4).
 road(r1). road(r2). road(r3). road(r4).
 parkspot(p1). parkspot(p2).

%parkspot1toleftofroad1
pleftof(p1,r1).

%Lane1and2areonroad1
 inroad(l1,r1). inroad(l2,r1).

%Lane3and4areonroad2
 inroad(l3,r2). inroad(l4,r2).

leftof(l1,l2).
leftof(l3,l4).

%l1andl2westend->i1eaststart
westend(r1,i1).
eaststart(r1,i2).

%l3andl4westend->i1eastend
weststart(r2,i1).
eastend(r2,i2).


northstart(r3,i3).
southend(r3,i2).

northend(r4,i2).
southstart(r4,i4).
ileftof(I1, I2):-intersection(I1), intersection(I2), road(R), westend(R,I1), eaststart(R,I2).
ileftof(I1, I2):-intersection(I1), intersection(I2), road(R), weststart(R,I1), eastend(R,I2).


inorthof(I1, I2):-intersection(I1), intersection(I2), road(R), northstart(R,I1), southend(R,I2).
inorthof(I1, I2):-intersection(I1), intersection(I2), road(R), northend(R,I1), southstart(R,I2).
