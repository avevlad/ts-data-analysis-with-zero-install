# File system

```bash
cd examples
yarn ts-node -T ./file-system.ts
yarn ts-node-dev --clear --respawn ./file-system.ts
```


### readAndWriteFile
```
File body biostats.csv:
"Name",     "Sex", "Age", "Height (in)", "Weight (lbs)"
"Alex",       "M",   41,       74,      170
"Bert",       "M",   42,       68,      166
"Carl",       "M",   32,       70,      155
"Dave",       "M",   39,       72,      167
"Elly",       "F",   30,       66,      124
"Fran",       "F",   33,       66,      115
"Gwen",       "F",   26,       64,      121
"Hank",       "M",   30,       71,      158
"Ivan",       "M",   53,       72,      175

Only women:
"Elly",       "F",   30,       66,      124
"Fran",       "F",   33,       66,      115
"Gwen",       "F",   26,       64,      121


Write file success:  ./fixtures/biostats_only_women.csv
```

### readAndWriteFile

```
[ '.DS_Store', 'biostats.csv', 'biostats_only_women.csv', 'countries' ]
Size: 4

.DS_Store — isFile
biostats.csv — isFile
biostats_only_women.csv — isFile
countries — isDirectory
```