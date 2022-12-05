import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import React, { useMemo, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';


function Search() {
  const [search, setSearch] = useState("");

  return (
    <div>
        <OutlinedInput
            style={{backgroundColor: "#ffffff", outlineColor: "#242424", outline: "#242424"}}
            fullWidth
            id="outlined-adornment-weight"
            value={search}
            placeholder={"Search name or gameID..."}
            onChange={() => {}}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => {}}
                        onMouseDown={() => {}}
                        edge="end"
                    >
                        <SearchIcon/>
                    </IconButton>
                </InputAdornment>
            }
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
                'aria-label': 'weight',
            }}
        />
    </div>
  );
}

export default Search;
