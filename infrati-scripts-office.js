const scripts = [
  'https://code.jquery.com/jquery-3.7.1.js',
  'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js',
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
    $('#users').DataTable({
      layout: {
        top1: 'searchBuilder',
        top1Start: {
          buttons: [
            {
              extend: 'copy',
              text: 'Copiar',
              className: 'btn btn-secondary',
              exportOptions: {
                modifier: { page: 'current' }
              }
            },
            { extend: 'pdf', text: 'PDF', className: 'btn btn-secondary' },
            { extend: 'excel', text: 'Excel', className: 'btn btn-secondary' },
            { extend: 'print', text: 'Imprimir', className: 'btn btn-secondary' }
          ]
        },
        topEnd: {
          search: { placeholder: 'Digite a busca aqui' }
        },
        bottomEnd: {
          paging: { numbers: 5 }
        }
      },
      columnDefs: [{ className: 'text-center', targets: [4] }],
      scrollX: true,
      language: {
        searchBuilder: {
          add: '+',
          button: 'Filtro',
          data: 'Coluna',
          condition: 'Comparador',
          clearAll: 'Limpar Tudo',
          search: 'Buscar',
          conditions: { /* ... */ },
          logicAnd: 'E',
          logicOr: 'OU',
          value: 'Valor',
          title: { 0: 'Filtros', _: 'Filtros (%d)' }
        },
        buttons: {
          copyTitle: 'Dados copiados',
          copyKeys: 'Use Ctrl ou ⌘ + C para copiar',
          copySuccess: { _: '%d linhas copiadas', 1: '1 linha copiada' }
        },
        search: "Buscar",
        emptyTable: "Nenhum registro encontrado",
        info: "Mostrando de _START_ até _END_ de _TOTAL_ registros",
        paginate: {
          previous: '<span class="fa fa-chevron-left"></span>',
          next: '<span class="fa fa-chevron-right"></span>'
        },
        lengthMenu:
          'Mostrar <select class="form-select form-select-sm">' +
          '<option value="5">5</option>' +
          '<option value="10">10</option>' +
          '<option value="20">20</option>' +
          '<option value="40">40</option>' +
          '<option value="50">50</option>' +
          '<option value="-1">Todos</option>' +
          '</select> linhas'
      }
    });
  });
});
