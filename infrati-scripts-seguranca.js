const scripts = [
  'https://code.jquery.com/jquery-3.7.0.js',
  'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js',
  'https://cdn.datatables.net/1.13.5/js/jquery.dataTables.min.js',
  'https://cdn.datatables.net/responsive/2.1.0/js/dataTables.responsive.min.js',
  'https://cdn.datatables.net/1.13.5/js/dataTables.bootstrap5.min.js'
];

function loadScriptsInOrder(scripts, callback) {
  let index = 0;

  function loadNext() {
    if (index >= scripts.length) {
      callback();
      return;
    }

    const s = document.createElement('script');
    s.src = scripts[index];
    s.onload = () => {
      index++;
      loadNext();
    };
    s.onerror = () => {
      console.error('Erro ao carregar:', s.src);
    };
    document.head.appendChild(s);
  }

  loadNext();
}

loadScriptsInOrder(scripts, function () {
  // Inicializa DataTable com jQuery
  $(document).ready(function () {
      $('#ctir_table').DataTable({
        'dom': 'QBlfrtip',
        'buttons': [
          'copy',
          'excel',
          'csv',
          'pdf',
          'print',
          {
            extend: 'spacer',
            style: 'bar'
          }
        ],

        'scrollX': true,
        'displayStart': 0,
        'pageLength': 5,
        //disable sorting on last column
        "columnDefs": [
          {
            'className': 'dt-center', "targets": [0, 1, 2, 3]
          }
        ],
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
            pageLength: {
              "-1": "Mostrar todos os registros",
              "_": "Mostrar %d registros"
            },
            print: 'Imprimir',
            copy: 'Copiar',
            copyTitle: 'Dados Copiados',
            copyKeys: 'Use your keyboard or menu to select the copy command',
          },
          'search': "Buscar",
          'emptyTable': "Nenhum registro encontrado",
          'info': "Mostrando de _START_ até _END_ de _TOTAL_ registros",
          'infoEmpty': "Mostrando 0 até 0 de 0 registro(s)",
          //customize pagination prev and next buttons: use arrows instead of words
          'paginate': {
            'previous': '<span class="fa fa-chevron-left"></span>',
            'next': '<span class="fa fa-chevron-right"></span>'
          },
          'lengthMenu': 'Mostrar <select class="form-select form-select-sm">' +
            '<option value="5">5</option>' +
            '<option value="10">10</option>' +
            '<option value="40">40</option>' +
            '<option value="50">50</option>' +
            '<option value="-1">All</option>' +
            '</select> linhas'
        }
      })
    });
  });
