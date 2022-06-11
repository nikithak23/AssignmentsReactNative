/*
A simple ReactNative app layout using the basic components like Flex, Scroll view, Props, adding Images etc.
*/
import React from 'react';
import { Image, StyleSheet, ScrollView, Text, View } from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};
const SpiderMan = {
  uri: 'https://images.immediate.co.uk/production/volatile/sites/3/2021/11/Screenshot-2021-11-25-at-16.42.46-3711c4e.png?quality=90&resize=620,413',
  width: 64,
  height: 64
};
const Tobey = {
  uri: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Tobey_Maguire_2014.jpg',
  width: 64,
  height: 64,

};
const Andrew = {
  uri: 'https://media.vanityfair.com/photos/5876e7faa57f7203699c9317/master/w_2560%2Cc_limit/andrew-garfield-little-gold-men.jpg',
  width: 64,
  height: 64,

};
const TomHolland = {
  uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1158532533.jpg',
  width: 64,
  height: 64
};
const drStrange = {
  uri: 'https://www.cheatsheet.com/wp-content/uploads/2021/11/benedict-cumberbatch.jpg',
  width: 64,
  height: 64
};
const zendaya = {
  uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFRYYGRgYGBkYGhwaGBgYGBoaGBgaGRgYGBgcIS4lHB4rHxgaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQhISQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxP//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EADwQAAEDAgMFBgUDAgUFAQAAAAEAAhEDBBIhMQVBUXGRBmGBobHwIjLB0eETFFJC8RVygpLCByMzYrIk/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMAAQQFBv/EACwRAAICAQMDAgYCAwEAAAAAAAABAhEDEiExBEFREyIFFDJhcYEzsTSRoRX/2gAMAwEAAhEDEQA/APK3ZFScE7goA5IDfwRYDqrQU4USOCnJFGiSW9M1yUKghyE0pymhQjGOik1MQkwqFcEgnCQbOiPt7UAYnQe5XQDn4ACwncmFu7eOq2rVv6j8Iya0SYyyGqzb+sMZwZDhkoC5N7sg21dujlOai5hGoITUap4n1/t4LTtqmIceI/vqo0XGTMkqp2S1rizBzbl6fhZlRkSIzUSLbsm10p1Qwqxr1TQcZWTSSSVBiSSSUBIlSUWpyVCDEpNCTQnUL5HSTJKEGVZ1VH7vuTfuBwRKLEvJF9wwJIZt0FMXLVVMJZIvuWuaoBxlN+5aomq3irSKc49mWxKcqAqt4pYwd6oK1RZKg14z9+arrVNwVdE79ytIVOfY07bMiPfRaVzUc+GNE6Zax4oHZhzkwV0GyKcl9Qx8LSc84O6Co3QMVqZh3DzSxMa4GRDoyHJZL3yZOaO2kCXmd5lCst5zUTKkndCpP971pUGBwyieP0KCZbHVaFizOND5Hlx5K2HHbkJpMOh9yqbyxxD4R8Q8+5aTP/YQdMjqpsb03d/v1VcB2mcg9sHvUgJWjti2AdiA5rKBUKT3LA6NVMFRBlRghQZdfgtUXJNfKZUXZJRGaZSlQnJIqMpQkoWxQUkpSUKMlKFOEoTaOcQSUoShSiEUlKEoUogytpnfwUGhWExkqYUROdxTAlRK0LHZlSpm0GOKFtLkNRcnsEbKJnI9ZXaW1HDbvJLfiiC7TllvWHa7BfTIJK6YUXGg1oywkk55euccEmUr4NEIOPJxj6UnQa/ymeQT06euXNG3NBwJnOd6GePTvkd/JHGSoGUXZY2nvHv7qYojdmO7cq2Pg6yCeiJHAFWy0FW5DmmRO7TUKLTBjUbp14KNJxGfUehU6xBVp7AsF2rSluMZtOvLiuUr1MJiNPYXV3FWBB35H6FcvtGnB8vFEBJtRKBckKZu+5CpKUhaySXcKNyDuSN0hE8KUX6sgwXQ4J/3QQKSmkv1pB/7oJfuWoFJTSi/WkH/ALoJLPSU0onrSLUlOFHCjoQNCUKQapfolRtIJRbKkoVhpFN+meCq0TS/AwG9RKmQVBCwoo0Nl2WNwynNen7B2RhaJA8FzPZWwyDl6DYBY8s7dG/FDTEs/wANa4HvRNHZLIgjJF0WopgQxCkzMq7DplpGEZ6mBOf0XLbW7JCCWwOUyvQUJctCN7cFRZ4q+m6k8seMvYVpkHLh78l0vazZoze0aEE8jr5rmxpB3ZfZNxy1IXkjW6Lf1IAPLwz0Kn3eI6z65eKHYZyO+eo0jyVjHy0cRlxGuXmmC7Bdo6eY+yxLn4luXbgQ7uI6H8QslzFRGrMYjNPCsuWw4qATTI9hsKWFSShQoiQlClCShZGEoUklCEMKSkkrIWwnhXMYp4E5RAcihgzV7AN6i9ipcEmeNtjIZEkX4xi1VlUGMlG3s8TS4mAqnNcDlKW8YxZfI9y3Icd6qt6ckDi4DzVz6ZETvErU2NbhzAYEio0TvGh8RAKGT0oZGOpnc9maENA4BdXb0oXC21KqW/A/CAdJjqQjGX9zS3yBycM+9ZtNmvVR31IIoELjLPtNOT2weIy8it+2vQ8SFX0lVZtsYIQtyxZN3txtLWcvcLDuu1VaocNNob4YnfhFyiqcTU2paY2ObxBC8xrPDRDtScJ5yfwuyfb3NQS6thPAOiPALhO0Fq+m9zHuk5OB4zoeoV41pkTI7iEY8ge7LmPwSnrDCSRoTPLPXlp1VVBwcMu89cyOhVlx8TeX4y5fZaDOiFQzB45Hp+R0QDmx78EWzNvL2PXyVFdm/wB+/sULCRn3NkXOEb1R+xeCBGq16jCQC05+4QYq1C8N3tBTYu0IyRSYOzZzy0uygapP2c8NxkZFGUraqWEAZPJJ7uKLfjdREtEN38kdC6Meps97W4iMlfYbJNRuIOAWhd1n/p4sEAiJU9j0vglRRJSsob2YqHMOBWXf2TqT8DtV2dlULHDgVz3agzXPJW4ltIxISUoSQ0CaDGKeFWNapALeo0Y3IHcxDvYjy1UuYglCwoyK2XRbAjIJ69+XQMIACpqMVKzyVD4ysvfWxHyW72ZZL3N7mv8AFvw/8/ILm2GF0fZWsBVPfSePEEO9AsuRcmzC+DQ25aXLJwNODXECPIaoMWD/ANNlRtw57if+4wPwuaQRHwnMgiRigiYXpdo1r2AEbkmbEpzIaOgSY5FVUOnibd2cds21qNY11WrSfiPyYm/qNzjcczvjVdpsZpjDEQiBZMYNM01g2HGOCCbTewcE0twPadoHOnDMZrlK9ndVcbqGFjGNLhHzvgT8LRx59V6EwfFzQV52cY92NoAPcPtorhS5KyW9jyf9W6OJzXzgbLiTh0yiSYJkwOKDvLmpUaHvDsvhkgjkJXrT+zLCZcB4DXxWJ232WxlrLWxhe1M1rwLUH5OCsnkAHvb6R9Ciaj/r6fchZts+JE7j5GR469UfjkHkPX30TWAi61Etgan+48nEeCZ1I4SPe8R5nqnsHw4A6H6Eg+Tkc5mZ36/f6DqgYaM0MhvIflZFe8cHkwJzC33NgHu9+kLnb9nxdUzG+wrMtrLbfaj2iBpBCuG1XYMBaI4rLaFYAnRtmdsPq7TLqeDD4omw2mxjWgjmskMUhTRpMGzoGbYZiznDMjuWRtauH1C5uhVIanwotJTmDQkicCSmllag5oShM1yeVsRkaFCZwUgUiFKJdAdQId7Voi3LpwhUusnnRp0lZpxNEGAuR2x7gse1w1E5cQWkOHQqh1q+flKa0MPg7p9FkyxNeJnrmw7qWNz3BdJRqrzfsheywNP9JLemnkQu8s6krnS9ro6aalGwi8fkq7AanuTbQfDZAJ4wh9n7TDZDm9clE9yqDnvgrUtn5LDN8D/Q4zpAK1rT5BORRJgyQS94AXF9uJfbPHAB3QifJdLc1Vze3DiY9vFpHUKOVsuMaPIGHPVHW59+qCqthx5oi3dn1+60rgyvaRpWwyHP1yPktGZ13gHu1zQVFucbiAfA6+SvD9BvGIfX1QsYiFcZkd31I+y52/GY8QuguT8U8Wz0ifRZD7UvOFsT+EePkDLG47GWArGoqtsx7DBhUOpFuRWuJilFrkQUmqICta1MihTY4CmGpmhWtCbFASZCE6vwpIqA1ANKrkrWvQLHQrWVEiMxsohjX5rRs7Nz5jcsdr1o2u0HsENKdGVi3FXuGWdJ7DiAnPCQia76jHghg0gBCC9d5ypnaTy4EgGEUotlxmkqGfdOeXHBo3Ce4rKbbODySIls58Yg+i1DeAFxDQMSpfcFz9P6Y7/f2WTqYqMTV08tUhdm6+CoWH+rMc2/cei9Jsbn4Z3Lyi5YWlrm5GZB5LtOzu1w9onXIOHfHouZkje50scq9p2bbpp1I6q6jUpOBBcwngSB6rnbqzY4h2HoXDxgIq32dTcB8Thw+KfVLURySa3OkZc08gHN8CmrXYA1Cxq+zqYylz+/Fl5JWuzWAzh5SS71VyVFOK5Qc6pizWNf5rTuHQFz+0rsNBJKAh55tKjhqvb/AOzlRS1B5flF7QdLy4iAT4xx80M7IR795rVF7GWfNmrbnNk6nI+v1U3uwvz9xLULQqZB3I9FbtCpv8fv9FGEhqzsmnvc3zEeRQVw2BIJCJxS08wfp9PNU3PycoPhoffcpFuy2lQA/FveeqhDiYOak+o2dEmVMznyWiMpIzTjF9ybaZ0UmNSFQZealjA0zTFlklxuKlig2qe3cm1qsZCqFRKmc89UyOaTdV4AnghXPkMwp06S22YdKOdTpk4XONxaxyJY9BtJV9JOhIVJB9N6niQYT4itCntuI0hAdnJ3KbNZ3keqEJlEUnRhPAx1MrJ1NyjZt6WlKgm5ZMDw6KFN/wCm5rmGHZciIGRT1yW4T7yPvosy6qzBCwUbZOj07YN+ys3XMZEcDvW9S2awrxXY20n0azXNPzOAcNxkx1zXq1lt9kQ44XcHZFJyQ0sbjnqX4OhZs9rUqkALNbttkfMOoWXd7c/UOCgMbt5/ob3ud9BmgYzfuWbW2iGnCM3HIAZk8gsk2DnfHUzdqG6tbz4u9962LHZ4ZLicTz8zj6NH9Le5Xvt8pQOXgJI892lby4z3rJrN+3r9V1+1LXWBvXLX1OPH1HueqfinaoTOINb1Mi32Pco2pUxMGWfuVl4s53q6m+RHimsWn2LqdQjJXAh3LMHxQJKut3buKqOzsvlUO/ZzYJxjkns7VgEu3oaq3LlI8FBrjxXShujnZHUjafs9jgHYwJUTs1rQSHgrNpq9pKfGImU14HFMSr20xMqtgV7AmxSM8pMkkpQkjAs5lIpBOAuYkdFsdgRFNRp08pVzGb1cckYvct4pSVota1O1kpNzCspuzWiOXG9rEyw5F2HZbE6CU1eiQMwQiqF4WH4Urm7LwZjMIZyjJOKaoZjjKFSadg9SpiZnr9R7PVZJKIc89UM8LnONM3t6lZSHw4HgQehXr5tGPpNxsDhAIkA7l489ezdkiatqwn+AHTIpOdbJl4H7mgJuy6IH/jZ/tCMtKY0aIHcIHkrri3IJCLsLYBZbNdBVtRy7k9xTkFFsZknc3JU0VZyt7aZHJcptyxgYgOf3XpFejKy73ZwcCIyIVxbTLlTPI6jIJUWOgrpdsbCcwktEjh71XM1WEGIIPD8LXGWpGaUaZc4SFXTfB5Zqbab4zY+OOF0dYVb+IV0C2F1hnO4x5+yhyyDCuYZbB3KLmyAfA/Tyy8FvwStUY+ojTskxXAKqmr2BbYowyZYxquYFWwK9rUxCWx0lLCkrBs5YBSASAUguadIkx4Cv/UBEAKgIq0ZicAdN6pYYydsL1mlSEypGqm1wmd6Pfah84AABvUrO1aCcUEBMj00W3TqyPqJJK1ZmuMlTcN/9lrPtGnQAKZsCG5xCuPRpdwX1j8HP1KZKFqtXVNsW71kbVoNaNQErNhUVdjsOaU1xsYjmr2z/AKcWxbZMxa/EfAuJC4DYfZr9RorPIDCJDdXO4HuC9Ho7SbQotZkCBmSQAJz1XPzSv2rc14oP6ie02gvDRqSr7dw0BWE3bFsSX1LimXHcHYvABsylU7S0Y/7bar/8rC0dXlqz6JGlb7Lc61hEKt7lxH+N13u+FrWN4vcXu/2tgDqUdsu2ubl7/wD9BZTbAOFjMc72tdGWWcmdVaj9wpYZxjqa2N+4umMbL3taOLnBo6lCHaDXfI1z+8NIb4OdAPhKOs+ztBhxYcT/AObyXvP+p0nw0S2rcNY2GjM5KNJCU22Yd00vyIA8z9gq7fZbG/EQB69Ubb0MsTlda2xe7E7QaBRFtjW9Nm5k98ILavZ6hXEuphrv5N+F3jGvjK6ZlplorP2/cmR2Ae54ztbs/UtpPzs/kBm3uePqssjXv9he0X1mCCCMjqOI4FeX9odlii/4fkdJHdxb9lr6fJUqZnzw1RMdiIY1UsCKY1deO5x57EmtV7Aq2hEMCYhLFhSViSKijkgEgnCk0LmpHQbE1qsaSNEwCm0JiRTZNj3DKT1V1GoRluVAVrU2KoXJ2g5lQ8Ve2oTvQlJG2zw34oBOWFp3nie4I8mSMIOTBw4ZZZqEeWTqToeE57hEyUNToNcc2gjgQPsirlxJwyCZlxGYJOZjiFbQowFw8+eWSVvY9h0nRQww08+X5B27MpTOAeEj0RDNmUh/QO4ax1lEmnhA0zE6gnXfwPckVmcpeTfHBi5SX+iTabR8oA5QPRSbn9R+VBjpJHDgnjuQ2NSS4Rawycl23Z4BlEcXS7rp5QuKtmYjHEx1Xc27YaANAIVrY5/Xy2Uf2E17kxksS6kvkrXwoOtQzVM5iKomAtOyYAgqbM0dQeoima1JoKk9qqtnK55TU9hfcCuGSF5/20tZYT/FwI9D6r0OsFzHaO2xscDvBCkZUwqtHlBcGnMwr2XDP5BUVG5kO1GXRRFJp4LdHqpxMsujxydt0aLarP5BEUnNOhCx/wBqO5MbeM2kg9yZHrpXuBL4bB/TI6DAksH9er/JOm/PfYV/5b8mc0KYSAUwEaQixNCkAmAU2hMjEFsdrVaymYmD0RGzLcPeAdNVq0LsuqYGtAYDGmZhMSBqzIY0o0swiN5ifsVobQqtBhjQAO7U7/AIejSiC4a+9Ny5PWZ9T0rhf2el+F9F6UdcuX/xDW9MalF6cNO70TMbPspnOgZeAWB7ncilEcP1/H1UmPHHPhlEcVVTdqDPfnv8NyOt2lwcAAQYkkNEcnE/CTHkpRL7kGMDRkOc/hScB74KThpnp0TtblO9UMQZsmiC9g1OKe7LNdm1gC5rY7IqMbpr1wnJdR+kVGcfrnc/0SbCrrU1Y1hCTgqsw0DsppAQUQxqrrNzVkDLVyKOaCtijQ5GuAWiiosjaNKQVsVEDcsyKFlo8c7S22Co/vOLrr5yuZc9wOUrue3VGHsdpMg+oXOsr0+5bsEYyXudGTqJSX0qzIFZ3Eouxrkkg8FqMfR3wqbh7J+AZ7ym5ccFFtNMXglOU0qaK8SdNCSx0damDNanhOApBq7iiecbGAVrWpNarGNRqIDkXWlQscHDctQBjjjZIOc8B+VmUmSQFqMYAA1vjxPNZeszenHSuWdT4V0jzz1yXtX9iY3E6Xc+AA3BXpwyB/cKL3gBcNs9fGKRJlcsDgDGLI6aKp0xrnu9wqycxPMjPTor2MJzPTd6KweWG7MawSHAGQcy4gdBmTw0RlQANDWgAGTIiZOonMgeKptnhrTAzOU65e+asewnIk5AGZOnDuUvYij7rKmMxHCNNTy4ItlIA6RG709wk0YQO/NRe7MDjM9P7blS2CdthNhWDajHHTEJ8cvrPgu5wrg7d2FzHRIa5pI5EGPJd9UdChy/iCqa/BWBKFuThjv+yjVu8JQVzczBnIGfUfVA2YlEPovSriVm0K/xkzll9Vph0hWmVJUToIxpQVNFtRIFicg66LqIW4UZZ532/pAsB4OHmCPquDbTbxC7/wD6gsLqLgNcTY8HBeZGk/g5asUJSjaM+TKoSo0m2wPBEtotaJcRCxBjH8lNrHvyhxR+hNurK+apGz/iFPgks7/DKnBJF8o/uK+c+5c1WBMkuujnMmFa1JJGhbCrb5gtOnp4/RMkuL8R/kPW/A/8d/kk5NU99Uklz+52exW36N9AjqWo5fRJJGAgqjq3mPor3fM7w+qSSAaIpH5v9P8AyCSSsgXb69PVdtcpJKPg5PX/AFIwdoe/JZ11/wCN3+U+iSSUzL2Kdi/I3mf/AKcuot9AkkiQEuC5uqLYkkiQsZyEutEklYRw/a75P9Q9Vxrkkl1+i/i/Zy+t/kKnK+01SSWuP1GR8B6SSSeIP//Z',
  width: 64,
  height: 64,

};

const simpleApp = () => (
  <ScrollView style={styles.main}>
    <Text style={styles.header}>Spider-Man: No Way Home</Text>
    <Text style={styles.subheader}>2021 ‧ Action/Adventure ‧ 2h 28m</Text>

    <Image source={SpiderMan} style={{ width: 305, height: 300, marginVertical: 20 }} />

    <View style={styles.content}>
      <Text style={styles.description}>
        With Spider-Man's identity now revealed, our friendly
        neighborhood web-slinger is unmasked and no longer able
        to separate his normal life as Peter Parker from the high
        stakes of being a superhero. When Peter asks for help from
        Doctor Strange, the stakes become even more dangerous, forcing
        him to discover what it truly means to be Spider-Man.
          </Text>
    </View>

    <Text style={styles.details}>Release date: 16 December 2021 (India)</Text>
    <Text style={styles.details}>Director: Jon Watts</Text>
    <Text style={styles.details}>Budget: $200 million</Text>
    <Text style={styles.details}>Music by: Michael Giacchino</Text>
    <Text style={styles.details}>Produced by: Kevin Feige; Amy Pascal</Text>


    <Text style={{ marginVertical: 20, fontSize: 35, fontWeight: '500', color: 'red' }}>Cast:</Text>
    <Image source={Tobey} />
    <Text style={styles.cast}>Tobey Maguire</Text>
    <Image source={Andrew} />
    <Text style={styles.cast}>Andrew Garfield</Text>
    <Image source={TomHolland} />
    <Text style={styles.cast}>Tom Holland</Text>
    <Image source={drStrange} />
    <Text style={styles.cast}>Benedict Cumberbatch</Text>
    <Image source={zendaya} />
    <Text style={styles.cast}>Zendaya</Text>
  </ScrollView>
);



const styles = StyleSheet.create({
  main: {
    marginHorizontal: 20,
    marginVertical: 40,
    backgroundColor: 'white'
  },
  header: {
    fontSize: 40,
    fontWeight: '700',
    color: 'black'
  },
  subheader: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: '500',
    color: 'red'
  },
  details: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: '500',
    color: 'black'
  },
  content: {
    paddingVertical: 20
  },
  description: {
    fontSize: 18,
    color: 'black'
  },
  cast: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: '500',
    color: 'black'
  },
});


export default simpleApp;
