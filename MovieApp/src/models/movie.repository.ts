import { Movie } from './movie.model';

export class MovieRepository {
  private movies!: Movie[];

  constructor() {
    this.movies = [
      {
        id: 1,
        title: 'shazam 6 güç',
        description:
          "Herkesin içinde bir süper kahraman yatar, kimileri için bu birkaç sihirli sözcük ile ortaya çıkabilir! 1939 yılında yaratılan süper kahraman Shazam, genç Billy Batson'ın ihtiyaç anlarında sihirli sözcükleri söyleyerek dönüşebildiği bir süper kahraman. Sihirli sözcükleri söylediği an dünyanın en güçlü ölümlüsüne dönüşen karakter, gündelik hayatında okul ödevleri gibi meselelerle boğuşurken, süper kahraman olduğunda da dünyanın güvenliği için mücadele veriyor. Süleyman'ın bilgeliği, Herkül'ün gücü, Atlas'ın dayanıklığı, Zeus'un görlemi, Aşil'in cesareti ve Merkür'ün hızına sahip olan karakter, edindiği güçlerin sahiplerinin baş harfleri ile S.H.A.Z.A.M. adını alıyor. Peki bu güçlü yetişkin bedenini yöneten küçük bir çocuğun ruhu bir araya gelince ortaya nasıl bir kahraman çıkıyor? Uçabilir mi? X-ışını görüşü var mı? Ellerinden yıldırım atabiliyor mu? Sosyal bilgiler sınavını geçebilecek mi? Shazam yeteneklerinin sınırlarını bir çocuğun neşeli pervasızlığıyla test etmeye koyulur. Ancak, Dr. Thaddeus Sivana tarafından kontrol edilen kötülüklerin ölümcül güçleriyle savaşmak için bu yetkilere hızlıca hakim olmayı öğremesi gerekecektir...",
        imageUrl: '1.jpeg',
        isPopular: true,
        publishedDate: new Date(2019, 4, 5),
      },
      {
        id: 2,
        title: 'amazing grace',
        description:
          "Amazing Grace, 2018 yılında kaybettiğimiz sevilen müzisyen Aretha Franklin'in hayatına odaklanıyor. Belgeselde, 1972 yılında Aretha Franklin'in Los Angeles'taki New Bethel Baptist Kilisesi'nde verdiği görkemli konser gözler önüne seriliyor. Gerçekleştirdiği bu muhteşem konseri Amazing Grace adını verdiği bir albüm ile kayıt altına alan Aretha Franklin, bu albümü ile yalnızca Amerika sınırlarında 2 milyon satış rakamına ulaşmıştı. Franklin'in dünya çapında en fazla satılan albümü olan Amazing Grace, aynı zamanda müzik dünyasının da kutsal albümlerinden biri olarak kabul gördü.",
        imageUrl: '2.jpeg',
        isPopular: false,
        publishedDate: new Date(2018, 6, 4),
      },
      {
        id: 3,
        title: 'high life',
        description:
          'Ömür boyu hapis cezası ile karşı karşıya kalan bir grup suçlunun hikayesini konu ediyor. Onların bu cezayı almamaları için önlerinde tek bir seçenek vardır; o da sonu ölümle sonuçlanabilecek bir deneye katılmayı kabul etmek. Şanslarını denemek isteyen suçlular, uzayda geçecek olan insan üreme deneyinin bir parçası olmayı kabul eder. Ancak hayatta kalmak onlar için hiç de kolay olmayacaktır. İçinde bulundıkları gemi kozmik ışın fırtınasına maruz kalınca suçlular için adeta bir ölüm kalım savaşı başlayacaktır.',
        imageUrl: '3.jpeg',
        isPopular: false,
        publishedDate: new Date(2019, 5, 3),
      },
      {
        id: 4,
        title: 'billboard',
        description:
          "Casey’in başarısız bir radyo istasyonu olan WTYT 960'ı kurtarmak için çok az zamanı vardır. İstasyonu babasından devralmasının ardından onu kurtarmak için ne yapacağından emin olamayan Casey, bir yarışma düzenlemeye karar verir. Casey, dört katılımcının bir ilan panosunun önünde yaşayacağı ve orada en uzun yaşayanın bir mobil ev ve 'dokuz altmış' bin dolar kazanacağı bir yarışma düzenler.",
        imageUrl: '4.jpeg',
        isPopular: true,
        publishedDate: new Date(2019, 4, 12),
      },
      {
        id: 5,
        title: 'storm boy',
        description:
          ' Başarılı bir iş adamı olan Michael Kingley, artık emeklilik hayatını yaşamaya başlar. Kingley, geçmişinden açıklayamadığı görüntüler görmeye başladığında, unutulmuş çocukluğunu hatırlamak zorunda kalır.',
        imageUrl: '5.jpeg',
        isPopular: true,
        publishedDate: new Date(2019, 6, 1),
      },
    ];
  }
  getMovies(): Movie[] {
    return this.movies;
  }
  getPopularMovies(): Movie[] {
    return this.movies.filter((i) => i.isPopular);
  }
  getMovieById(id: number): Movie {
    return this.movies.find((i) => i.id == id);
  }
}
