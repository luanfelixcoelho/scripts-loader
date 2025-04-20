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
