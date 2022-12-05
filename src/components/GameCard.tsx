import { Grid } from '@mui/material';
import React from 'react';

import "./gameCard.css";

function GameCard() {
  return (
    <Grid item sm={7} md={6} lg={4} alignItems="center">
        <div className='gameCard'>
          <a href=""><h3>MAGIX Photostory Premium VR Steam Edition</h3></a>
            <div className='image'>
              <img src='https://steamcdn-a.akamaihd.net/steam/apps/821760/header.jpg' width={"350px"} height={"163px"}></img>
            </div>
            <table>
              <tr>
                <td><p><b>Developer:</b> <a href="">Sliced Games</a></p></td>
                <td><p><b>Publisher:</b> <a href="">Sliced Games</a></p></td>
              </tr>
            </table>
            <p><b>Owners:</b> 0 .. 20,000</p>
            <p><b>Release date:</b> May 1, 2018</p>
        </div>
    </Grid>
  );
}

export default GameCard;
