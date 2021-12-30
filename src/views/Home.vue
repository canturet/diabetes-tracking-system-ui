<template>
  <div class="dashboard">
    <v-carousel>
      <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
    </v-carousel>
    <v-col>
      <v-row>
        <v-card class="mx-auto mt-3" max-width="300">
          <v-img
            src="https://i1.wp.com/diyabetgelismeleri.com/wp-content/uploads/2018/09/3-Mar-2018-6-Essential-Skin-Care-tips-For-DiabetesHome-page-slider-750x450.jpg?resize=696%2C418"
            height="200px"
          ></v-img>
          <v-card-title> Diyabette Cilt Bakımı </v-card-title>
          <v-card-actions>
            <v-dialog v-model="dialog" width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="indigo" outlined dark v-bind="attrs" v-on="on">
                  Görüntüle
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">Diyabette Cilt Bakımı</span>
                </v-card-title>
                <v-card-text>
                  Diyabetli hastaların diyabetli olmayan bireylere göre hijyen
                  kurallarına daha fazla dikkat etmeleri gerekir. Kan şekerinin
                  yüksek değerlerde olmasına paralel olarak dokulardaki kan
                  şekeri de yükselir. Bu durum pek çok mikroorganizmanın üremesi
                  için uygun bir ortam oluştururken, damar yapısındaki
                  değişiklikler yara iyileşmesini geciktirir. Enfeksiyonun kan
                  şekerini yükselten bir faktör olduğu da göz önüne alındığında
                  diyabetli bireylerde yara oluşumunu önlemek önemlidir. Genel
                  cilt bakımında dikkat edilmesi gereken durumlar şunlardır;
                  Ciltte kesik, çizik oluşmaması için kesici aletleri
                  kullanırken dikkatli olmak. Gerekirse eldiven kullanmak.
                  Tahriş edici olmayan pH cilt yapısına uygun (pH 5,5) bir sabun
                  kullanarak ılık su ile banyo yapmak. Banyodan sonra cilt henüz
                  nemini kaybetmeden losyon, nemlendirici kullanmak Cildi
                  doğrudan güneş ışığından korumak. Güneş yanığı oluşmasını
                  önlemek için koruma özelliği yüksek olan kremler kullanmak.
                  Perine bölgesinin temizliğine özen göstermek. Bölgeyi kuru
                  tutmak. İç çamaşırlarını sık değiştirmek ve ütüleyerek
                  kullanmak. Ciltte yaralanma ya da çizik oluşmuşsa sabunlu su
                  ile yıkamak ve hemen sağlık kuruluşuna başvurmak. İyileşme
                  belirtisi göstermeyen yaralar varsa ya da yarada ağrı,
                  kızarıklık belirtilerinde artış varsa hemen sağlık kuruluşuna
                  başvurmak.
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-card-actions>
        </v-card>
        <v-card class="mx-auto mt-3" max-width="300">
          <v-img
            src="https://www.acibademhayat.com/Images/YayinMakaleler/diyabetin-agizdaki-6-belirtisi_7091_1.jpg"
            height="200px"
          ></v-img>

          <v-card-title> Diyabette Ağız - Diş Sağlığı </v-card-title>
          <v-card-actions>
            <v-dialog v-model="dialog" width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="indigo" outlined dark v-bind="attrs" v-on="on">
                  Görüntüle
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">Diyabette Ağız - Diş Sağlığı</span>
                </v-card-title>
                <v-card-text>
                  Kan şekerinin yüksek seyretmesi diyabetli bireylerde ağız ve
                  diş sağlığını olumsuz olarak etkileyen bir durumdur.
                  Kontrolsüz diyabette tükürük fazla seviyede glikoz
                  içerdiğinden diş çürüklerine daha sık rastlanır. Diş etlerinin
                  sağlığı da hastalığın kontrolü ile yakından ilişkilidir.
                  Yüksek kan şekerinin damarlar üzerindeki olumsuz etkileri
                  bilinmektedir. Bu durum kan damarlarının oksijen taşıma ve
                  atıkları uzaklaştırma kapasitesini azaltarak dokuların
                  beslenmesini olumsuz yönde etkiler ve dokularda enfeksiyona
                  karşı direnci düşürür. Bunun yanında bazı bakteriler glikoz
                  oranı yüksek olan ortamlarda daha kolay ürerler. Bu nedenle
                  tükürüğü daha fazla glikoz içeren, enfeksiyona karşı direnci
                  azalmış olan diyabetliler, diş ve dişeti hastalıkları için
                  daha riskli durumdadır. Bilindiği gibi enfeksiyon da kan
                  şekerini yükselten bir durumdur. Diyabetli hastalarda diş ve
                  dişeti enfeksiyonları engellenemediğinde enfeksiyonu lokalize
                  etmek güçleşir. Ketoasidoz ve sepsise kadar giden durumlarla
                  karşılaşılabilir. Hastanın ağzında kötü koku ve ağrının yanı
                  sıra diş kaybı nedeniyle çiğneme problemleri ve buna bağlı
                  gastrointestinal şikayetler ortaya çıkabilir. Diyabet
                  Hastaları Ağız-Diş Bakımında Nelere Dikkat Etmeliler? Dişler
                  günde en az 2 kez yumuşak bir diş fırçası kullanılarak ve
                  dairesel hareketlerle en az 3 dakika fırçalanmalıdır. Diş
                  fırçalama işleminden sonra diş ipi kullanılarak diş araları
                  temizlenmelidir. Diş ipi kullanılırken dişetlerine fazla bası
                  yapılmamalıdır. Bu işlem yapılırken hafif kanama olabilir. Bu
                  durum zamanla düzelecektir. Kullanılan diş fırçası her 3 ayda
                  bir değiştirilmelidir. Her 6 ayda bir düzenli olarak diş
                  hekimi kontrolü yapılmalıdır. Diş hekimine gitmeden bir gün
                  önce ya da o gün mutlaka kan şekeri kontrolü yapılmalıdır.
                  İnsülin kullanılıyorsa mutlaka dozunda ve zamanında
                  yapılmalıdır. Diş tedavilerinden sonra yemek yiyemeyeceği
                  düşünülerek insülin dozu atlanmamalıdır. Eğer tedaviden sonra
                  normal öğün yenemeyecekse kalori açığı sıvı içeceklerle
                  kapatılmalıdır. Diyabetli hastalar tükürüklerindeki fazla
                  şeker nedeniyle ağızda oluşan mantar enfeksiyonlarına karşı
                  daha savunmasızdırlar. Bu durum genelde dudakların yerleşim
                  yerlerinde çatlak ve kızarıklık ile kendini belli eder. Eğer
                  hasta sigara kullanıyorsa ve diş protezi varsa ağızda mantar
                  gelişimi daha da hızlanabilir. Ağızdaki mantar
                  enfeksiyonlarının tedavisinde ilaç tedavisinin yanı sıra
                  sigaranın bırakılması ve protez bakımına özen gösterilmesi,
                  protezlerin geceleri çıkarılması yarar sağlar.
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-card-actions>
        </v-card>
        <v-card class="mx-auto mt-3" max-width="300">
          <v-img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFRYYGBgZGBoYGBgYGhgYGBgYGBgZGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJCs0MTQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ1NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EAD4QAAIBAgMECAUCBAUEAwAAAAECAAMRBCExBRJBUQYiMmFxgZGhE0KxwdFS8HKCsuEUYpKi8QcVI8IkM2P/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIEAwX/xAAiEQACAgICAgMBAQAAAAAAAAAAAQIRAyESMUFRIjJhBBP/2gAMAwEAAhEDEQA/APUbRTs4WnQ4CjWMdlzjQVgOiGtpaJMUBlCS4HCRl1Oqj0gUlQ1irRBohTTgLeE66ZXEAEXgtRo0tnI3Y8IxFftV91C3C3pHYBv/ABp/CPpDq2zWdSrbqgi1jmc+4R9HZyIqqXJsAMh3eMTkg4sCqmB1NZevgUPzsPQyFtjqdH9V/vC0PiyvQxuJfqnwlgdlONCredvYzEdMMTjlb4VLD1VU5b6oWU9++Loo8TC0KmUnQI//ACcVfn/7NL3EOUrb44EHy4zDI2MwzmoEIuLMRZ7jXrS/2dt9cTkw3XAzXge9YID0qk4ZQw0IvO2lT0bxO8hQ6rmPCXLQKPPOneHLVktnvKVsOJvl9ZruimxxhcOqtm56znmx4eA0kjbLWpWSq+lO5Uc2Oh8pYuCYdiV7Iq1Qt4co2jSvJSkJpJaMBKu6JU4+sWNhLDF1LCU+KqBFZzwBJ8hGJmBxI/xG1VQZrStf+Qbx9yJ6XSNhPOv+nlIvUr4lvmYgH+Ilj7WnodMRIRMpkyrG0khCpaAyZPYCB79zDXFkbwP0lFhcUCGPL68o0JsPerbIa/vOEURYe8r6DXPede7uh7n5RACNmJ4xR3xrZcpyYpJcmboN8UWRMirnKOZwNY9EDC5GXCazCkBl8ole0MagOFvSJaHO3pAqhiVt75byVqAOkT0+R8pE5IzztAYihEekYMVYZ6QejtNHYqguRmx0UDvP4hdBRLXo3zGvLnK56hB75aGoLXJlVXbeYmKUtAlskNcnjFcnOQCHYGmDcHl97SCipbGkk8r5SVMcRxlY2ycQGckFVAZlG7vlrXIA3TxgCYpxk4KnkQcx3fiQ5V2dFjvo1SbStxhNLaY4+0xrbSA1F45NqpftW7my99I1JA8ckbGvSoV1YMiubakWP+oZzz/b/wD00cP8fBVFB7Xw3y63EK4yz5EDxmk2btEB7ggggg55Z8ZcYXaAe6hgeds7d0OdAoNvowuw8UysrEFWHVdTkVYGzqRwIIPpNqDe1uMz23MOExO8NKihv5l6rewQ+cu9jNcZ/LxnVStWcpR4ug5adhaJlhQUEXGkFqRpp9Caa7I0S5krtYTq5CQubxiBMQ0yXTnHfDwzgHrP1F89T6TW1qZY5Sm25sWnWCJVUtnlYkEX4wEA9BsBuYVLfPdz5nL2mpSnaS4DCJTRUTsqAo8BlJigJvnlGFDU6skpi5jtxeXuYRRAHASR0DbQrhKTO2iqb9/IDmTpMPst6rZCm4LMWN1YWJPG44TX7WfedU4L1iOF+Ekw7y1pENWyLB4VkXssWOpsYbSwjHMgiOFcjjGtiW5xNsqkAY47rsvK30EUD2hVPxG8voIp50vsz0IL4ovMSQCCc7cI4MxHWNhyH3kCA3udT7D8yT4gm888IoPaTBrwZTMx0n6WfCc4ehnVsN9z2aYOni5HDhJk0lbLhFydI0WP2nSpEB3AY6KMz6DhKDG9LQLhEB7ySB42mLeucySSxzJOZJPEmQB76zPLM/BpjgS7LjaW2qj5FiBxAyymv2bRFGkqfNq/e5Gfp2fLvmB2cu/Wpg6M6A+G+LibtmJGt+PrHCTbtizJRpIJqVrj9+P4g5q+3/EV8vL6mMC3uL23ha/I8D5G0uzgSI+p5D7gfePXEWNx+84PSb9Qte4I5cGHufSBV9qpTcpUD5C+8qsw890XB9oXQ1GzQ0seeMJOKRhZwGHJhce8z2HxNN+w6seV7N/pOcIKMIJg1QTiej+HqG4un8JFvQjKVWI6GDe6lQbv+YZ+oyMM+Owj0x1tYcYlKcl5M1tDorVRz1C6ZWZbNwz6oN9b8IXs+tuABRa3DSayniUtfeJyvbQf3gO3aKMFqr2g261vmBGV+ZFtZynCto04s11GSKbbR3jRbvceoU/+skx2J+HSVB2n6x7lvl6/aR4lCz0l4AMx8yoH0aV21K++7EaDqr/CuQ/PnHKTjjS9hCClmb8Iudm7UPFvKXtMb2lr8RcXHdMLhHCBqrZhLbq/rc9hfAdo9w75abGx7EXJudSeZOZJkQm4nXLhWTa8GpKXkNYWkmHrbygniJFin5TZF2rPNlGm0U+I2g++UpUzUKjrm4RF47u8dWtwED+M1RTUCONwlHVtVe17EjK1iDfvhmyqTLSUh0beQuy71913JJuOdyR5QfZeMKvWYgMhZEKk3VnRTvkeG8B5Q5OyWlRZYek6KGvvKLb+dypbTxEPWUr7VU02RE3SzqCeYJFh5GXSCFgiVZNvhVJOgFz4CMQSs6U1iuHZQbb3VJ5L83tKSsGwGhijUG+fnNx4fL7WlhRNhK7AU8hyAFpZKsqRCO7945Fjkpw6jhwBcyWUjGbaxgWs655bv9KxSPpIoOJe1h2ef6FinnzXyZ6MPqjWlr3jZ2cE3Hn0RYuuUpu4NiqMwOuYUkfSeRbN3mu7sWdzvOx1ZmzJM9Z2it6NUc6b/wBJnlezQNxO8CcMz0jV/OuyVzm3tOpyj3p5t4TqLe374zgaSbZr7tameTofLeF5vd22XLL0mAVBpNzgq/xEV+JHW/iHa98/BhLxvdHDPF6YQR9P39JGFk66fvSQ1AQcv+e6dkZx5W+dtdRya1j66+ZguLw28d62drHy0MJp1/3xEc1S+gBHK9j+D7RAZ/E7OB1W8HbDOuaO6+DsPa80TV0+YMvit/6byM1qR+YeYYfUQ0UmyiXG4lfnDD/OoPvkZKm2X+ekp71Yr9QZcHDo2hU+BBjEwQGq35ZaQC/wETbgAv8ACqWA6xG4wA5m5GXfCFrPWsBuqgN7Frm/M2HtJ6qpTR3bTcYW/UWBAXzvaU+Cr7qqOIFpym68mnDBS3RpqeETdG+SSLgMuVr65GB1ejtE6u/jvW9gIyhjCRG1MYQbE5SHJNbOyg4u0yl29sR0Cmnd6aXNh2gx1YjjkALjkJWYbEFLFtCeB17ptsNjL6zP9MdlruLXpL2CS6roVOrW5g28ryWr6O0JNPjI0ezdoh1FwL8AMgBwktd85kejjvUG92EyzfIkWvcLyI4n3mqYDUEMDxE0YZN6bMX9eKKacUVbbJUuQlSogqG7KjAKxPaOYJX+UiG4rBfDpqqNuoLIRbhz8b8ZK1O4nDhWYbpY7vKaGrRjWmQU8KrOgWxVOsxHFzLtBIcNRCAACwhCCCVCbJaYlb0h2ca1JguoHV8ZZO+6t/LzgD1nX5T5S46JewbAYV90XUg+EOTCHjl4wc41/wBD284wYwHUEeMbbYUWQdE0zMiesWkCZyQCTQAlfYpqMXyz+2X2imU6RbRxaYh1pVKgQbu6FvYXRSbeZMUzOMb6Nsb4raNrOxCKdjIR1lujjmpHsZ5FsprqF/Tl6T2ICeO1E+HiKicBUYf7jaccy0jTge2WVWcQfaPXMes5a8zGkkRM5a7Kxvw2IPZbUDgeDAHj9RKZb2zy+sLoXOVrxr8E1a2bCnVBF1YHvH3HDzk6rvLe3d3esD6P7EVlFRzc3yUZAW5njNZTUWtbLlNMYurZinKKlSM21A6jP7+PfEtKWuLoJvdkeWUq8Stn8pSiyLTHfBkbYQcY/wCJHh7x8R3RX1cOi5sRrbO5zPhCsOgN7HQd4FrXyEHxtHeFu8H0jaVbdDX4gjzOUHFIcW26KbEgm28zMRmN4k28L6QVDaWdWnA2SYmepBpIKwj5xViSM+EioG0VVusfCJRBy2Pw+ItLKliAylTmCCCDob6iZ9IXSq2i2itMrNl4txUrK5uwclu8M11IHKxHhpwmywFyg9pSvshKrioGKOPmHEcjzE1FBAihRwFv7zRhjbsz/wBU/ionUTISVRHssaomowHQJMgjAJIsZLKnpFiiiA/pO8fKUGP6YimgZFDXtxtLDpmxNPdXNmso8TFg9i0fhIjIrAKAbgG54y/BKJcPtt2UHIXAMssNtEtrb2gibJQCy3XlJk2aw7JDexkuii0Woh1QeUQp0jwI8zBERl1U/WOVxEBjOk9IDE1LE/Jx/wDzWKFbb2bv1na5F932VR9ophnfJnoQa4o0yNcRwlLs/aAA3HNraE8uUsFxifrX1E0qSZilBphQnmfTTB/DxTOBYOA4PM6N9vWekh76Zyn6U7FOJpqFIV0JZSRcG4sVPK+XpFJckVjfGWzBYZyRrLBLDxmbq1alJ2R0syGxzyvCaOJqPwt4fmceDZs5ou2cXtxlngKfGVuzcAx1BmqwOyyACSAOM6RhRynOzRbJp7tJR5nxJh6QDC4hVAUA2Gh19YfTdSMmE62jJKLuwLEnrSuxK9dT3Swr9owHF5Mh8oyV2DVVjVMKq0xbKB1CF1yg9bLjvQqpylcXu+WkdXrltNOAjKPOZ5zvSNEIcdskqCDbkLvOG051Z25NA4S0hZb39IU7cLfSQtlrG0Ck7BGp2kMLqEWg4WQztFh2z3NwL8Zq0TSUfR3AlmLkdVf6uH5l8i2bwmjBFqLbMn9U05JLwTMI2IvGgzuZhwj2NhGpIsW9lMpEMye39ohaqFuzv2NuF8gfeXzbOdQGRt7uORmXr4b4uJUt2EIc95ByE06bU4AGWxIjbaBXJlIPIiT0NoK2V90+0cu0Ue6OgNuf2nG2Sj5023T+lsx6ySiQ4p1745dqD50HpAXw1anqpK93WH9o1XVstDyMVCItoYpTUaw5cO4RSq2jV3ajLyt7gGKefP7M9CC+KOOsr8Th7y1tGMk6ElLTSohujup7ibemks8N0jrpk6q4/wBJ9RlHNSkZw94W10DUX2hY98NiWDsGpvxJF0Pjb6ybC4DDoLmrTt4/aC/4XuktPAr80amw4L2Wo2iiqFor8RueaoPEnM+UlSo7Zuw7lUWUfmCU1A0yk6vBybBRiug9K8nSvKxWnfixWDiWwxEixVRWAubWN5WNiDBK1c6R82iP8k2WFfaWVl9ZVvWLHONJnaayHJy7Oiio9EqxyCNE41fPNT4jMQYIlBtOqy/sGQbwOdvMWjyRy+x8o0B2pbn7SA05MCO76RrH9mJsaIWSE4DZxqOFA7yeAHOcpIWNgJrNnYcU0t8x7R+0qEOTFPJxWuyahRWmgRRkPUniTITqTC6oyvK9n1mrpGLtjmMcBGIucI3Y0DIxlK3ateymWxpE6CRPsVH/APsJIvfdGQ8zrKTSJpsweFxQ3nLZDesD4CWmHNRrGmg/ie49BNvSwqKoVUUAaAAWnHwqH5fTKLkOjN/9tqlb76b/AC3cvC+sbhq9VG3aq25EaHwPGaU4VeXvOPRRl3WFx3/aFhRBh8VfjcQfFUULEOBfgRkbeMeNnlT1SSPfzk1aiGG638rd/IxAYHbmGIrvYkjq2/0LFPRsDQYIARmL/UxTi4fp2WX8MEpjhIEqiPR5yO45VnbRBpxTAZIEnbTgjhADond6NE6TAY4NGmIGKAhrSIUyzBRqT/zJHkuAom++dMwO86X8JKVsJS4qwfbFNaahlYmzAMDbQm1xysSJylpCcThVq3D3KcbEjePK4zAgFMharIOzbfUXJtnZgL8MxKcaIjK9BDgW/JEg3yOPuI/Ev3e0hVyOREls6USFgeB8Rb3A1jl0uDvDl+V4SIEX0I7xmPOSjxB7xa/lEBwkHiB43t7x12PD98xOPrpfmRkfOWextnb76EKM2z9vExpWwtRVsI2Vh93rkeH5h74giWxpKV3CBugWA5crSjxlEo26fEHmJ35cUZ65y2ywo4tGUqxse+APV3CR1WB43gp0zkNQiQ8z9FrAvZYJtBRwF+WcjqbWqX6ioLcGBJPn/aV+/Fvi/wC8pDzSZ0WCKNRsraS1gRbdde0uvmp4jvh0xKYooQ6dpdOR5g9xmuweKWqiuujDTkeIPeDlOuOfJfpwy4+L10TxRt4t6dTkdvGseYivOExgJQOBkeOS6ZaggiMZZLQqg5GAvwlwrHdF/wB5xR601ikgeOvWembVFI/zfKfOE08Yp0Im2qYBWyIBEqsT0VovmFKHmh3ZxcTRHL7KZcQOcctUSat0ScdisfB1v7iBVti4tNFR/wCFrH0MlxZanF+QxK0ctYSirf4hO3RceA3h/tg3/eN3tBl/iBH1k00XaZqfiCcY3FgbaZ+cz9PbCnRh6wlNpDnEMugZIDKlMcOclXGDnHYqD3zNhx+8OawUgaDLyGvnKrB4gM6jx9gZYU33lseLkeQt+JUTjk9D0VioAFza9vHO3dbKZ5abjEnfBB3D57zC1jp8pmuwuhPf9JU7bTro3LeHtf7SpdEwewbEOMh5iBsbR2JqXMhE4NmyMdEyPbmJ1SSeB8MjIwe6K6cypjBxD8MhLZG/C2h9JtsBQCIFGurd54zL7Do3a4a9vDXhNXSvad8apWZcr3R2vWCkfviPzBNtKDT3v0kZ917H7Tm1H0HP8gn6Sv6QY/dwzc2so8SfwCY5dM5QfyRUYnEgEZwb/Fam8o/8YeOcgfGd8zUzfaL5MUG46TpxWd/KUaYrKcFUxUx2i7fE5a8by86HbQ670iciN9R7OP6T5mYs1s84RsPHFMTRbgX3D/C4K/W0vE2pIjMk4s9UL5xb0irGMDGbqPOslLRF5HecMBWSh4O+TXEc8V7mMRYUnJAig3/cFXqnUd3POcnK0dafojZJzdhJSNKQoQNuzm7Jyk4VhQrIDSHKD1cAjdpFPiAYaVjSsVDsz2K6K4Z9aSA8wLH2lJi+glM9hnTwY/ebtlkbCJxRSm0eXYroliU7FUnuYX9xKjEUsZTPWQMOak/SexukAxOEVuElxRays862Jin+Ihfq2Ofnkb+s2mEOR7ifcwLHbLW97ecds07ocE3018D+/KCVBKXLZdYU9TzP4+0r9vr1Ub9Li/8AMrL95PhK4Km3A2P1+8k2jhfjUWQHdJF1bkwN1PqBHLaoUHUjOsc4y0io1zmrizr1XHJh+wfMTrVJkZvizlR7cZJsrB1MQ9layA9diP8AavM/SRhN6a/o9QVEULoRe/MnMn3nSEbZzzTpaLPZ2z0pIFQWA87nmTxMNLgCKrkl4GbnuH1mqKMMnZBjH3mz7IHme4TIdJK9aq1louETTIZn9WR5aD8zaFJX43GqlwJTgmhRlxdnnFQkGxUr4ggxgQTR4/FBibgHylBWw1ydwHynN4fR2jn9oaovJVeBMXThfytCfiEWuuRFwRObxs6xypjt/K8ExFYqQw1UhvNSD9pM2JUc+/KCPU3rgDWJRaKc0z25X3kVhxAPqIkN4DsCrvYSix13F9QLGF3mtHnvskYThMaM44CMQjGjWPOkiVwTlnAAPF9s+X0EU7i+2fL6CKZJds1xekX1ot2OnbTucCIpGmnJ7TloAQFJz4cItObsAog+HGmlCbRWiAENCRthRD7RbsAKmrs4HhKfH9HWNyjAHv8AzNduzm7FQHnGCwmJouy1abbjDJ16yXGl7aZX17pb0MRbjNeUguI2cj9pRfmMj6iKh2ZTaOx6VY74urkW31yJ5A8/OUlfYtVNGVh4Z/WbOtsE/I5Hcwv7i0DxGx6/B1PiCPzJcL7R1jka6ZkWwDkgM2VxkMgc+PPIMZrNlON0JfMCw7xwldV2ViAbkKfAn8QzZ2BqA3ZfQiCjRMptl4tYAAPn3SYVkbQicp4W62ZZX4zZTrml2H+4eXGd40kcmSYyrYGZzFU97jDXLaEnwMgJ7pQipfBjjO4emFlg5WVuJYg8oAT1aCMLlQbTr4VXTdsAOFuEjRsrQjCnh6RDujP18MASu6T4xtLZjtwCiaTFYEvYqQD3zuH2VVJAfdA4m98vC0XHZXLRpti4cJh6aclEMKQdcSoAVQbAWEY+JY90ujk2FM4XUyA4q/ZHrIBbUyVXUR0Kxrhn1OXIZQrDUgshFcSRasQAuOYb7eX0EUE2g/8A5G8voJyYJfZmyPSNYYoopqOAooooAKKKKACnAYooDOxGKKAhXivFFABRRRQA5OECKKAzm6IgoiigA6K0UUBA2LwSP2hn+oa/3lDjtnGnrYg6EfiKKVHsmRXtREp8X1n8IopTFE7TQw8YewB4jOKKCHIPoILXkzVwJyKUc2QvjwJCMcSbARRRgG0cJUbWw8/xD6Oy/wBTekUUltlJIMTAoOZk64ZBwiikNl0ZnbSgVn/l/pWKKKYJfZm2P1R//9k="
            height="200px"
          ></v-img>

          <v-card-title> Diyabette Ayak Bakımı </v-card-title>
          <v-card-actions>
            <v-dialog v-model="dialog" width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="indigo" outlined dark v-bind="attrs" v-on="on">
                  Görüntüle
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">Ayak Bakımı</span>
                </v-card-title>
                <v-card-text>
                  Ayakları oluşabilecek zararlardan korumak ve riskleri azaltmak
                  için bazı basit adımlar uygulanmalıdır. Ayaklar her gün
                  kontrol edilmeli, ayakların üstüne ve tabanına, parmak
                  aralarına bakılmalıdır. Eğer eğilmekte zorluk çekilirse
                  tabanları kontrol etmek için bir ayna kullanılabilir ya da
                  birinin yardımına ihtiyaç duyulabilir. Ayaklara iyi aydınlanma
                  olan bir yerde bakılmalıdır. Kesik çizgi, su toplaması, nasır,
                  deri kalınlaşması, batık tırnak veya enfeksiyon işaretleri iyi
                  kontrol edilmelidir. Sıcak noktalar altta yatan enfeksiyon
                  veya enflamasyon anlamına gelebilir. Eğer ayaklarda sinir
                  hasarı varsa çok az acı olacak ya da olmayacaktır. Ayak
                  Banyosu 1. Ayaklarınızı temiz tutun Her gün yumuşak bir bez ve
                  hafif bir sabunla sıcak suda yıkayın. Ayağınızı yakmaktan
                  kaçınmak için suyun sıcaklığını bilek veya dirseğinizle
                  kontrol etmeyi unutmayın. Ayaklarınızı uzun süre suda
                  bekletmeyin veya diğer herhangi bir solüsyona batırmayın.
                  Ayaklarınızın uzun süre suda kalması cildinizin daha fazla
                  kurumasına neden olacaktır. 2. Ayaklarınızı kurutun
                  Ayaklarınızı tamamen kurutmak için yumuşak bir havlu kullanın,
                  Ayak parmaklarınızın her birini ve aralarını kurutmayı
                  unutmayın. Ayak parmak aralarının nemli kalması mantar
                  enfeksiyonlarının oluşmasına sebep olur. Ayak parmaklarınız
                  arasına losyon sürmeyin ve asla ayaklarınızı kurutmak için saç
                  kurutma makinesi kullanmayın. Ayrıca her yıkama sonrası
                  ayaklarınızın üstüne ve tabanına losyon sürün. Yumuşak bir
                  losyon su bazlı cildinizin nemli kalmasına yardım edecektir.
                  Nasırlar Nasırlar ayaklara iyi oturmayan ayakkabılar veya
                  yanlış yürüme tarzı nedeniyle oluşan basınç veya sürtünmeden
                  dolayı oluşurlar. Nasırlardan ayağınız üzerindeki basıncı
                  azaltmak yoluyla kurtulabilirsiniz. Basıncı azaltmak için ise
                  düzgün, ayağa iyi oturan ayakkabı edinmek ve ayakkabılarınız
                  için özel tabanlık kullanmanız yeterli olabilir. Tabanlıklar
                  vücut ağırlığınızın ayak tabanınıza düzgün dağılmasına yardım
                  edecektir. Oluşan hafif deri sertleşmeleriyle ilgilenin.
                  Ayağınızı mutlaka bir ayak bakım merkezine göstererek bakım
                  yaptırın. Sert deriyi esnek tutmak ve çatlamasını engellemek
                  için tüm sertleşmiş yerlere losyon uygulayın. Kendi kendinize
                  uygulayacağınız nasır veya sertleşmiş deri sökücüler
                  kullanmaktan kaçının. Yanığa neden olabilir ve sorunlu bölge
                  çevresindeki sağlıklı deriye zarar verebilirler. Nasır pedi
                  kullanmayın. Nasır veya sertleşmiş derinizi asla bir jiletle
                  kesmeyin. Sertleşmiş kalın deriniz varsa nasıl tedavi edip
                  önleyeceğinizi sağlık uzmanınıza sormalısınız. Ayak Tırnakları
                  Ayak tırnakları mümkün olduğunca düzgün olmalıdır. Banyodan
                  sonra tırnakları yumuşakken kesmek daha kolay olacaktır.
                  Tırnağı dümdüz kesmek için tırnak makası kullanın ve ardından
                  bir törpü ile köşelerini yuvarlaklaştırın. Tırnaklarınızı çok
                  kısa kesmeyin. Ayak parmağınızın ucunda daima yaklaşık 1,5-3,0
                  mm uzunluğunda serbest tırnak bırakın. Tırnaklarınıza kolay
                  bir şekilde ulaşmada herhangi bir sorununuz olması veya
                  tırnaklarınızın kalın ve kesilmesi zor olması durumunda
                  podiatrist veya ayak bakımı uzmanından yardım isteyin. Batık
                  tırnağınız var ise kendiniz tedavi etmeye çalışmayın, mutlaka
                  bir hekime gösterin. Ayağınıza kesici aletlerle (örneğin:
                  nasır makası gibi) müdahalede bulunmayınız. Çoraplar Her gün
                  temiz çorap giyin. En az %80’i pamuk veya yün karışımlı bir
                  çorap terin emilmesine ve cildinizin nefes almasına yardım
                  eder. Kısa veya külotlu çoraplarda naylondan kaçının. Çoraplar
                  ayağa iyi oturmalı ve özellikle gergin ve elastik olmamalıdır.
                  Büyük dikişli çoraplardan kaçının.
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-card-actions>
        </v-card>
        <v-card class="mx-auto mt-3" max-width="300">
          <v-img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKFz7dIaMFAwAROzv4EAC1wet0Ud6cR-nDug&usqp=CAU"
            height="200px"
          ></v-img>

          <v-card-title> Diyabetik Retinopati </v-card-title>
          <v-card-actions>
            <v-dialog v-model="dialog" width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="indigo" outlined dark v-bind="attrs" v-on="on">
                  Görüntüle
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">Diyabetik Retinopati</span>
                </v-card-title>
                <v-card-text>
                  Diyabetik retinopati, diyabete bağlı olarak göz duvarının en
                  içteki tabakası olan ve de görme hücrelerinin yeraldığı ağ
                  tabakanın “retina” hasarıdır. Diyabetik retinopatiyi tek
                  başına bir göz hastalığı olarak düşünürsek hata yaparız.
                  Diyabetik retinopati vücutta kanlanması olan hemen tüm
                  organları etkileyen diyabetin gözdeki bulgusudur. Ağ tabakada
                  küçük damarlardaki tıkanıklıklar ve damar duvarı
                  geçirgenliğinin artması sonucu beslenme bozukluğu gelişir. Bu
                  beslenme bozukluğunun ağırlığına ve yaygınlığına bağlı olarak
                  hastanın görmesi de etkilenir. Diyabetik retinopatide ağ
                  tabakadaki kanamalar, sızıntılar ve diğer değişiklikler tek
                  tek değil bir bütün olarak değerlendirilir ve evre ile ifade
                  edilir. Diyabetik retinopati başlıca iki evreye ayrılır. Daha
                  erken evre olan nonproliferatif diyabetik retinopati (NPDR) ve
                  de daha ileri evre olan proliferatif diyabetik retinopati
                  (PDR). Bunlar da kendi içlerinde sınıflandırılmaktadır.Bu iki
                  evre arasındaki en önemli fark nonproliferatif evrede
                  kanamalar, sızıntılar göz duvarında ağ tabakanın
                  içerisindedir. Ağ tabakanın beslenme bozukluğu daha da
                  arttığında bunu kompanse etmek için anormal damar oluşumları
                  yani proliferasyonlar gelişir, artık proliferatif diyabetik
                  retinopati ortaya çıkmıştır. Değişiklikler sadece ağ tabaka
                  içinde sınırlı değildir. Göz küresinin içine doğru uzanırlar.
                  Bu anormal, yeni damarlar normal damar yapısında değildirler,
                  dolayısıyla hem daha çok sızdırırlar hem de göz boşluğuna
                  kanamaya meyillidirler. Her iki evrede de ortaya çıkabilen
                  sarı noktadaki (maküla) değişikliklere diyabetik makülopati
                  adı verilir. Diyabetik makülopatide kendi içinde ağırlığına
                  göre sınıflandırılır. Burada damarlardan sızıntı sonucu
                  gelişen klinik olarak belirgin maküla ödemi henüz
                  nonproliferatif diyabetik retinopati evresinde dahi görme
                  bozukluğuna yol açar. Diyabetik retinopati ne gibi şikayetlere
                  yol açar? Diyabetik retinopati en erken evrelerde hiçbir
                  şikayete yolaçmaz. Hatta ileri evrelere kadar hastanın görme
                  şikayeti olmayabilir veya görme kaybı yavaş yavaş
                  ilerlediğinden kişi günlük yaşamını etkileyecek derecede görme
                  bozukluğu gelişene kadar farkına varmayabilir. Hastaların
                  doktora başvuru şikayetleri genellikle görme bulanıklığı, ani
                  görme kaybı, gözünün önünde uçuşmalardır. Bir şeyi çok net
                  vurgulamamız lazım, görmeyi etkileyecek derecede diyabetik
                  retinopati bugünden yarına gelişmez. Düzenli göz dibi takibi
                  yaptırmayan hastalar doktora gözlerim çok iyiydi birdenbire
                  görmem azaldı diye gelebiliyorlar. Halbuki o görme kaybı
                  gelişmeden yıllar öncesinden göz muayeneleri yapılsa
                  kendilerine gözdibinde diyabetik retinopati geliştiği
                  söylenecektir. Zaten diyabetlilerde göz muayenesinin amacı
                  hastanın şikayetleri ortaya çıkmadan diyabetik retinopatinin
                  saptanması ve görmeyi tehdit edecek hale geldiğinde müdahale
                  edilerek görme kaybının engellenmesidir. Fakat burada en az
                  düzenli aralıklarla göz muayenesi kadar önemli olan hastada
                  kan şekerinin düzenli gitmesi, kan basıncının normal
                  sınırlarda seyretmesidir. Çünkü ağ tabakadaki damarlar
                  vücuttaki damar sisteminin bir parçasıdırlar, dolayısıyla
                  diyabetli bir kişide gözdeki bu bozukluğu tek başına bir göz
                  hastalığı olarak düşünemeyiz. Kimler diyabetik retinopati
                  açısından risk altındadır? Diyabetik retinopati ister tip 1
                  ister tip 2 diyabetli olsun her diyabetli de ortaya çıkabilir.
                  Diyabetik süresi uzadıkça diyabetik retinopati görülme riski
                  de artar. Diyabet süresi 15 yıl üzerinde olanların yaklaşık
                  %75’inde, yani 4 hastadan 3’ünde diyabetik retinopati
                  saptanır. Diyabetik retinopati açısından diyabet süresinin
                  yanı sıra glisemik kontrol, hipertansiyon, kan yağlarının
                  yüksekliği, böbrek bozukluğunun (diyabetik nefropati) varlığı,
                  gebelik diğer risk faktörlerindendir. Diyabetik retinopati
                  önlenebilir mi? Diyabetik retinopatinin gelişiminin veya
                  varlığında ilerlemesinin önlenmesi için uzun yıllardır
                  araştırmalar sürdürülmektedir. Umut verici çalışmalar olsa da
                  henüz bu amaçla kullanılabilecek kesin önleyici bir ilaç
                  tedavisi yoktur. Ancak diyabetik retinopatiye bağlı görme
                  kaybını erken tanı, düzenli takip ve de kan şekeri kontrolünün
                  sağlanması ile önlemek mümkündür. Kan şekeri kontrolünün hem
                  tip 1 diyabetli hem de tip 2 diyabetlilerde diyabetik
                  retinopatinin gelişiminin geciktirilmesi ve erken evrelerde
                  ilerlemesinin yavaşlatılmasında etkili olduğu uluslararası,
                  çok merkezli büyük çaptaki çalışmalarla tartışmasız bir
                  şekilde gösterilmiştir. Diyabetli hastalarda göz muayenesi ne
                  zaman ve hangi sıklıkta yapılmalıdır? Diyabetik retinopati
                  diyabetin uzun dönem organ hasarlarındandır. Gözdibinde ilk
                  lezyonlar diyabet başlangıcından yaklaşık 5 yıl sonra
                  görülmeye başlar. Ancak tip 2 diyabet sinsi başlangıçlı
                  olduğundan hastada diyabet başlangıcı tanı konmasından yıllar
                  öncesidir. Bu nedenle tip 2 diyabetli hastalarda tanı
                  konduğunda ilk göz muayenesinin yapılması gerekmektedir.
                  Çeşitli çalışmalarda değişse de, yeni tanı konan tip 2
                  diyabetli hastaların %20’sinde diyabetik retinopati
                  saptanabilmektedir. Tip 1 diyabet ise özellikle çocukluk
                  çağında gürültülü başlar, dolayısıyla sıklıkla diyabet tanısı
                  da hastalık yeni başladığında konulmaktadır. Bu nedenle tip 1
                  diyabetlilerde ilk göz muayenesinin zamanlaması ile ilgili
                  olarak farklı görüşler vardır. Genel olarak, 10 yaşın
                  üstündekilerde tanı konduğundan itibaren ilk 5 yıl içerisinde
                  ilk göz muayenesinin yapılması önerilmektedir. Hastanın hiçbir
                  şikayeti yoksa da yılda bir kez gözdibi muayenesi
                  tekrarlanmalıdır. Diyabetik retinopati saptananlarda ya da
                  gebelik gibi özel durumlarda takip aralığı daha kısadır.
                  Gözdibi muayenesinde ışık kaynağı ve özel lenslerle küre
                  şeklindeki gözün iç duvarı, yani ağ tabaka incelenir.
                  Gözbebeği ışıkta ufaldığından hastanın gözüne gözbebeğini
                  genişletici bir damla damlatılarak gözdibinde daha geniş bir
                  alanın incelenmesi sağlanır. Gerektiğinde ek testler
                  uygulanır. Diyabetik retinopatinin tedavisi nasıl yapılır?
                  Diyabetik retinopatide ortaya çıkmış damar bozukluklarını
                  iyileştirmeye yönelik ilaç tedavisi henüz mümkün değildir.
                  Ancak gözdibinde ağ tabakasının keskin görmemizi sağlayan
                  maküla-sarı nokta bölgesinde görmeyi tehdit edecek derecede
                  sıvı birikiminde damarlardan sızıntıyı ve buradaki sıvıyı
                  azaltmak veya ağ tabakada anormal damarlar geliştiğinde bu
                  damarların gerilemesini sağlamak amacıyla laser tedavisi
                  yapılmaktadır. Proliferatif diyabetik retinopatinin daha geç
                  evrelerinde göz boşluğuna kanama olupta geri çekilmediğinde
                  veya bağ dokusu gelişip ağ tabaka üzerinde çekintiler yapması
                  gibi durumlarda ise bunları temizlemek için vitrektomi
                  ameliyatı uygulanmaktadır. Ayrıca son yıllarda göziçine
                  enjekte edilebilen anormal damarların gelişimini ve
                  sızıntıları baskılayıcı ilaçlarla ile ilgili çalışmalar
                  sürdürülmektedir. SONUÇ OLARAK, diyabetik retinopati
                  önlenemese de diyabetik retinopatiye bağlı görme kaybı erken
                  tanı, zamanında müdahale ile önlenebilir.
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-card-actions>
        </v-card>
        <v-card class="mx-auto mt-3" max-width="300">
          <v-img
            src="https://www.egesehirhastanesi.com.tr/wp-content/uploads/2020/11/obezite-nedir-nedenleri-nelerdir.jpg"
            height="200px"
          ></v-img>

          <v-card-title> Diyabette Obezite </v-card-title>
          <v-card-actions>
            <v-dialog v-model="dialog" width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="indigo" outlined dark v-bind="attrs" v-on="on">
                  Görüntüle
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">Obezite</span>
                </v-card-title>
                <v-card-text>
                  Vücuttaki yağ dokusunun belli bir miktarın üzerinde olması
                  durumu obezite olarak tanımlanır. Obezite, birçok farklı
                  etkene bağlı olarak görülebilir. Bazı durumlarda genetik ve
                  çevresel etkenler obeziteye sebep olabilmektedir. Ancak son
                  otuz yıldaki artışa bakıldığında, durumun büyük ölçüde yanlış
                  beslenme alışkanlığından kaynaklandığını belirtmek faydalı
                  olacaktır. Obezite Hangi Ölçülerle Belirlenir? Vücut sağlığı
                  için ideal bir yağ oranı vardır. Bu oran, kadında %20 ile %25
                  arasındadır. Erkekte ise %15-18 aralığında olması gerekir. Bu
                  oran aşıldığı zaman, kişinin obeziteye yakalanma riski
                  artacaktır. Diğer yandan, bu ölçüm uygulanması güç bir yöntem
                  olduğu için Vücut Kitle İndeksi vki ölçüt olarak kabul edilir.
                  VKİ ölçümü, kişinin ağırlığı boyun karesine bölünerek yapılır.
                  Vücut Kitle İndeksi 30 kg/m2 olarak tespit edildiğinde kişi
                  obez olarak tanımlanır. 40 kg/m2 ve üzerinde ise morbid
                  obezite söz konusudur. Obezite ve Diyabet Arasındaki İlişki
                  Nedir? Vücutta aşırı yağ birikimi, insülinin hücrelere
                  nakledilmesini sağlayan hormonların salınımını engeller. Bu
                  durum ise tip 2 diyabet hastalığına yol açar. Eğer şeker
                  hastalığı obeziteye bağlı olarak gelişmişse, tedavi edebilmek
                  için öncelikle obezite sorununu çözmek gerekir. Dünya Sağlık
                  Örgütü’nün (WHO) verilerine göre, Avrupa’da görülen tip 2
                  diyabet vakalarının %80’i obeziteden ya da aşırı kilolu olma
                  durumundan kaynaklanmaktadır. Vücuttaki aşırı kilolar
                  arttıkça, hormon dengesi de buna bağlı olarak bozulmakta ve
                  vücut insüline karşı direnç göstermektedir. Aşırı Kilolar ve
                  İnsülin Dengesizliği Tip 2 diyabet, insülin direnci sebebiyle
                  oluşan bir hastalıktır. İnsülin direncinin en büyük nedeni
                  ise; öncelikle bel çevresi olmak üzere vücudun çeşitli
                  yerlerinde yağ birikmesidir. Aşırı kilolar, insülin direncini
                  tetiklediğinde vücut bir döngüye girer. Şöyle ki; kan şekeri
                  hücreye giremedikçe pankreas daha çok insülin salgılamaya
                  başlar ve bu durum açlık krizlerine, aşırı yorulmalara sebep
                  olur. Diğer yandan, yağ hücreleri de insüline karşı
                  duyarsızlaştığı için kilo vermek zorlaşır. Dolayısıyla,
                  insülin direnci aşırı kilolar sebebiyle görülmekle birlikte,
                  vücudun kilo vermesini de zorlaştırır. Bu durumda, obezite
                  diyabete sebep olacağı gibi, onun sonucu olarak da
                  görülebilir. Vücutta aşırı kilo birikimi her zaman risk teşkil
                  eder. Aşırı kilolar arttıkça, diyabet riski de buna bağlı
                  olarak artmaktadır. Bel çevresi, kadınlarda 80-90 cm
                  erkeklerde ise 100 cm civarında olduğunda diyabet riski
                  yüksektir. Diyabet ve Obeziteye Karşı Alınacak Önlemler Tip 2
                  diyabet ve obezitenin ortaya çıkış sebepleri hemen hemen
                  aynıdır. Bu iki hastalık, birbirinin sebebi ve sonucu
                  olabilmektedir. Dolayısıyla, doğru biçimde hareket ederek bu
                  iki tehlikeli hastalığa karşı önlem almak mümkündür. Beslenme
                  alışkanlığı, bu hastalıkların en yaygın sebebidir. Yapılan
                  araştırmalar, hızlı ve çabuk doygunluk yaratan besinlerin hem
                  diyabet hem de obezite riskini artırdığını göstermektedir. Son
                  30 yılda, fast food tüketiminin artmasıyla ve hareketsiz bir
                  yaşam tarzının yaygınlaşmasıyla iki hastalığın da doğru
                  orantılı bir biçimde arttığı gözlenmektedir. Dolayısıyla,
                  diyabet ve obeziteye karşı önlem almanın yolu sağlıklı
                  beslenmeden geçer. Finnish Diabetes Prevention Study isimli
                  çalışma, obezite tedavisi için kullanılan yöntemlerin
                  diyabette de iyileşme sağladığını ortaya koymaktadır. Bu
                  çalışmaya göre, yüksek posalı ve düşük yağ içeren gıdalardan
                  oluşan bir diyet uygulayan kişilerin diyabette de iyileşme
                  sağladığı görülmektedir. Bu diyeti uygulayan aşırı kilolu
                  kişilerin diyabete yakalanma oranı %58 oranında azalmıştır.
                  Hareketsizlik de obezite ile tip 2 diyabetin ortak sebepleri
                  arasındadır. Hareketsiz bir yaşam tarzının yaygınlaşması, bu
                  iki hastalığı büyük ölçüde arttırmıştır. Vücuttaki yağ
                  birikimini ve buna bağlı olarak insülin direncini önlemek
                  için, sıklıkla egzersiz yapmak gerekir. Metabolik Cerrahi Tip
                  2 diyabet tedavisinde uygulanan tedavi işe yaramamışsa, diyet,
                  egzersiz ve ilaç kullanımından istenen sonuç alınamamışsa
                  metabolik cerrahi olarak bilinen tedavi yöntemi uygulanır.
                  Metabolik cerrahi diyabette sadece tip 2 hastalarında
                  uygulanabilmektedir. Bu operasyonun temel amacı, insülin
                  direncine sebep olan ve kilo vermeyi engelleyen hormon
                  dengesizliğinin önüne geçebilmektir. İnsülin direncinin
                  kuvvetine bağlı olarak, kişi diyet yaptığı ve egzersizlerini
                  aksatmadan uyguladığı hâlde kilo veremeyebilir. Diyabet
                  tedavisinde uygulanan ameliyat, obezite cerrahisinden yola
                  çıkılarak yapılmaktadır. Yöntemler büyük ölçüde benzer olmakla
                  birlikte, uygulamada belli farklılıklar bulunmaktadır.
                  Diyabet, aşırı kilolara ve obeziteye bağlı olarak gelişmişse,
                  tedavi edebilmek için önce kilo verilmesini sağlamak gerekir.
                  Aşırı kilolar ilaç tedavisini yetersiz kılacaktır. İleal
                  interpozisyon gerçekleştirilerek uygulanan operasyonda,
                  bağırsaklara müdahale edilerek vücudun hormon dengesi tekrar
                  sağlanır. Tedavi Sürecinden Sonra Dikkat Edilmesi Gerekenler
                  Ne obezitede ne de diyabette hastalık riskinin tamamen ortadan
                  kalktığını söylemek mümkün değildir. Tedavi riski ortadan
                  kaldırmaz, ancak diyabete ve obeziteye sebep olan etkenlerin
                  kontrol altına alınmasını sağlayabilir. Dolayısıyla, bu
                  hastalıklardan kurtulmanın yolu kısa süreli bir tedaviden
                  değil, yaşam tarzının değiştirilmesinden geçer. Obezite ve
                  diyabet, vücudun doğal sürecinin bozulması sonucunda
                  gerçekleşen hastalıklardır. Yanlış ve dengesiz beslenme sonucu
                  vücutta biriken yağlar, metabolik hastalıklara sebep olur. Her
                  iki hastalık da ölümcül sonuçlara yol açabilmektedir.
                  Dolayısıyla, bu hastalıklardan tamamen korunmak için sağlıklı
                  bir yaşam tarzını tedavi sürecinden sonra da sürdürmek
                  gerekir.
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" text @click="dialog = false">
                    Disagree
                  </v-btn>
                  <v-btn color="green darken-1" text @click="dialog = false">
                    Agree
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-col>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
        items: [
          {
            src: require('../assets/1.png')
          },
          {
            src: require('../assets/1.png')
          },
        ],
     
    };
  },
};
</script>