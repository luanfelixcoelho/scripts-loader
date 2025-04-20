// scripts-loader.js
const scripts = [
  'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js',
  'https://code.jquery.com/jquery-3.7.0.js',
  'https://code.jquery.com/jquery-3.7.1.js',
  'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/js/bootstrap.bundle.min.js',
  'https://cdn.datatables.net/2.0.0/js/dataTables.js',
  'https://cdn.datatables.net/2.0.0/js/dataTables.bootstrap5.js',
  'https://cdn.datatables.net/searchbuilder/1.7.0/js/dataTables.searchBuilder.js',
  'https://cdn.datatables.net/searchbuilder/1.7.0/js/searchBuilder.bootstrap5.js',
  'https://cdn.datatables.net/datetime/1.5.2/js/dataTables.dateTime.min.js',
  'https://cdn.datatables.net/buttons/3.0.0/js/buttons.bootstrap5.js',
  'https://cdn.datatables.net/buttons/3.0.0/js/buttons.colVis.min.js', 
  'https://cdn.datatables.net/buttons/3.0.0/js/dataTables.buttons.js',
  'https://cdn.datatables.net/buttons/3.0.0/js/buttons.dataTables.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/pdfmake.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/vfs_fonts.js',
  'https://cdn.datatables.net/buttons/3.0.0/js/buttons.html5.min.js',
  'https://cdn.datatables.net/buttons/3.0.0/js/buttons.print.min.js'
];

scripts.forEach(src => {
  const s = document.createElement('script');
  s.src = src;
  s.async = false; // Mantém a ordem de carregamento
  document.head.appendChild(s);
});

new DataTable('#users', {
      layout: {
        top1: 'searchBuilder',
        top1Start: {
          buttons: [
            {
              extend: 'copy',
              text: 'Copiar',
              className: 'btn btn-secondary',
              exportOptions: {
                modifier: {
                  page: 'current'
                }
              }
            },
            { extend: 'pdf', text: 'PDF', className: 'btn btn-secondary' },
            { extend: 'excel', text: 'Excel', className: 'btn btn-secondary' },
            { extend: 'print', text: 'imprimir', className: 'btn btn-secondary' }
          ],
        },
        topEnd: {
          search: {
            placeholder: 'Digite a busca aqui'
          }
        },
        bottomEnd: {
          paging: {
            numbers: 5
          }
        }
      },
      columnDefs: [{ className: 'text-center', targets: [4]}],
      scrollX: true,
      language: {
        searchBuilder: {
          add: '+',
          button: 'Filtro',
          data: 'Coluna',
          condition: 'Comparador',
          clearAll: 'Limpar Tudo',
          search: 'Buscar',
          conditions: {
            "date": {
              "after": "Depois",
              "before": "Antes",
              "between": "Entre",
              "empty": "Vazio",
              "equals": "Igual",
              "not": "Não",
              "notBetween": "Não Entre",
              "notEmpty": "Não Vazio"
            },
            "number": {
              "between": "Entre",
              "empty": "Vazio",
              "equals": "Igual",
              "gt": "Maior Que",
              "gte": "Maior ou Igual a",
              "lt": "Menor Que",
              "lte": "Menor ou Igual a",
              "not": "Não",
              "notBetween": "Não Entre",
              "notEmpty": "Não Vazio"
            },
            "string": {
              "contains": "Contém",
              "empty": "Vazio",
              "endsWith": "Termina Com",
              "equals": "Igual",
              "not": "Não",
              "notEmpty": "Não Vazio",
              "startsWith": "Começa Com",
              "notContains": "Não contém",
              "notStartsWith": "Não começa com",
              "notEndsWith": "Não termina com"
            },
            "array": {
              "contains": "Contém",
              "empty": "Vazio",
              "equals": "Igual à",
              "not": "Não",
              "notEmpty": "Não vazio",
              "without": "Não possui"
            }
          },
          logicAnd: 'E',
          logicOr: 'OU',
          value: 'Valor',
          title: {
            0: 'Filtros',
            _: 'Filtros (%d)'
          },
        },
        buttons: {
          copyTitle: 'Dados copiados',
          copyKeys:
            'Appuyez sur <i>ctrl</i> ou <i>\u2318</i> + <i>C</i> pour copier les données du tableau à votre presse-papiers. <br><br>Pour annuler, cliquez sur ce message ou appuyez sur Echap.',
          copySuccess: {
            _: '%d linhas copiadas',
            1: '1 linha copiada'
          }
        },
        'search': "Buscar",
        'emptyTable': "Nenhum registro encontrado",
        'info': "Mostrando de _START_ até _END_ de _TOTAL_ registros",
        //customize pagination prev and next buttons: use arrows instead of words
        'paginate': {
          'previous': '<span class="fa fa-chevron-left"></span>',
          'next': '<span class="fa fa-chevron-right"></span>'
        },
        'lengthMenu': 'Mostrar <select name="example_length" aria-controls="example" class="form-select form-select-sm" id="dt-length-0">' +
          '<option value="5">5</option>' +
          '<option value="10">10</option>' +
          '<option value="20">20</option>' +
          '<option value="40">40</option>' +
          '<option value="50">50</option>' +
          '<option value="-1">All</option>' +
          '</select> linhas'
      }

    });
