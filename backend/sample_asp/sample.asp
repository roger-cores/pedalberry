intersection(i1..2).
lane(l1..4).
road(r1..2).
parkspot(p1..2).

% parkspot 1 to left of road 1
pleftof(p1, r1).

% Lane 1 and 2 are on road 1
inroad(l1..2, r1).

% Lane 3 and 4 are on road 2
inroad(l3..4, r2).

leftof(l1,l2).

% l1 and l2 westend -> i1 eaststart
westend(l1..2, i1).

% l3 and l4 westend -> i1 eaststart
weststart(l3..4, i1).
