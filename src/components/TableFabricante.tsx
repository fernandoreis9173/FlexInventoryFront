//criar uma tabela que mostre todas as informações dos tonners
//a tabela pode conter ou não um filtro

//importação dos componentes do Material-UI
import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Subtitle } from '../styles/app';
import moment from 'moment';
import 'moment/locale/pt-br';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: '#009add',
      color: theme.palette.common.white,
      fontSize: 16,
      fontWeight: 'bold',
      
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

//Definindo as Colunas
interface Column {
  id: 'id' | 'nm_fabricante' | 'dt_cadastro';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

//Ajustando a formatação das Colunas
const columns: Column[] = [
  { id: 'id', label: 'ID', minWidth: 100 },
  { id: 'nm_fabricante', label: 'Fabricante', minWidth: 270 },
  { id: 'dt_cadastro', label: 'Data', minWidth: 270 },
];

//Definindo os tipos de informações
interface Data {
  id: number;
  nm_fabricante: string;
  dt_cadastro: Date;
}

//criando a constante de estilização da tabela
const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
    marginTop: '40px',
  },
});



export default function TabelaFabricante() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [fabricantes, setFabricantes] = useState<Data[]>([]);

  useEffect(() => {
    fetch("http://10.113.162.132:3333/fabricante")
      .then((response) => response.json())
      .then((response) => setFabricantes(response))
      .catch((error) => console.log(error))
  });


  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <>
      <Subtitle>Lista de Fabricantes</Subtitle>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {fabricantes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                              <StyledTableCell align="left">{row.id}</StyledTableCell>
                              <StyledTableCell align="left">{row.nm_fabricante}</StyledTableCell>
                              <StyledTableCell align="left">{moment(row.dt_cadastro).format('L - h:mm A')}</StyledTableCell>
                  </TableRow>
                );
                        })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={fabricantes.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

    </>
  );
}

