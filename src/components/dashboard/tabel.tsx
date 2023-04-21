import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Tabel = () => {



  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Song</TableCell>
          <TableCell align="right">Rank</TableCell>
          <TableCell align="right">Plus</TableCell>
          <TableCell align="right">Minus</TableCell>
          <TableCell align="right">Times played</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {songs.map((song) => (
          <TableRow
            key={song.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {song.name}
            </TableCell>
            <TableCell align="right">{song.calories}</TableCell>
            <TableCell align="right">{song.fat}</TableCell>
            <TableCell align="right">{song.carbs}</TableCell>
            <TableCell align="right">{song.protein}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Tabel