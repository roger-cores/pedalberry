motive(harry).
motive(sally).
guilty(harry).
 r(r1). r(r2). r(r3). r(r4). r(r5). r(r6). r(r7). r(r8). r(r9). r(r10).

% encoding
innocent(Suspect) :- motive(Suspect), not guilty(Suspect).