// const urlPost = 'https://64513164e1f6f1bb22aab5b3.mockapi.io/artikel/'

// const body = [{
//     image: "https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2021/09/21214413/seni-rupa-terapan-810x540.jpg",
//     pengertian:"Seni rupa terapan adalah salah satu jenis karya seni rupa yang diciptakan dengan tujuan utama memberi nilai fungsi atau nilai guna sebagai benda dibandingkan nilai estetisnya. Itulah sebabnya seni rupa yang memiliki nama lain applied art ini banyak kita temukan dalam kehidupan sehari-hari karena tidak hanya memiliki fungsi estetis saja melainkan juga fungsi praktis. Jadi seni rupa ini bisa memenuhi kebutuhan dalam aktivitas keseharian kita",
//     artikel: `Dari keutamaan fungsi praktisnya ini lah yang membedakan seni rupa terapan dengan seni rupa murni. Bahkan banyak yang menganggap bahwa lebih susah membuat terapannya dibandingkan yang murni yang lebih bebas tanpa harus mempertimbangkan fungsi dalam karya seni tersebut. Anggapan tersebut mungkin akan terdengar klise jika membicarakan seni karena untuk menilai karya seni bisa dilihat dari berbagai fungsinya. Bahkan bisa jadi membuat lukisan tertentu lebih sulit dibandingkan membuat bangunan rumah.<br>Berdasarkan dari makna katanya, terap berarti penerapan atau perwujudan dalam praktik yang sifatnya aplikatif. Sifat aplikatif pada karya seni adalah pengaplikasian bentuk-bentuk fungsional untuk memenuhi kebutuhan hidup manusia. Contoh wujud fungsional tersebut antara lain pakaian,  perabotan rumah tangga, perlengkapan makan, perlengkapan ibadah, sampai perlengkapan pertunjukan.<br>Dalam penciptaan karyanya, bisanya seni rupa terapan dimulai dengan proses perancangan atau desain. Itulah sebabnya istilah desain sebenarnya juga berkaitan dengan seni rupa terapan yang melingkupinya secara luas, termasuk di dalamnya pula kriya, arsitektur, dan sebagainya. Jadi dalam seni terapan juga memiliki berbagai macam jenis karya dengan nilai fungsinya. `,
//     title: "Seni Rupa Terapan: Pengertian, Fungsi, Jenis, Unsur Dan Contohnya",
//     kategori:"Sastra",
//     date:"11-09-2021",
//     author:"lala Nilawanti",
// }]

// for(let i=1;i<=body.length;i++){
//   const urlId = urlPost+i;
//   console.log(urlId);
//   fetch(urlId, {
//     method: 'PUT',
//     headers: { 'content-type': 'application/json' },
//     body: JSON.stringify(body[i-1])
//   }).then(response => response.json())
//     .then(value => {
//       console.log(value)
//     })
// }