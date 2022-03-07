function tabloyaYaz(veri)
        {
            let elemanSayisi=veri.length;

            document.writeln("<table border=1>");

            document.writeln("<tr>");
            for(item in veri[0])
            {
                document.writeln("<td>"+item+"</td>")
            }    
            document.writeln("</tr>")

            for(let i=0;i<elemanSayisi;i++)
            {
                //eski usül ortama bağımlı
                // for(let j=0;j<1;j++)
                // {
                //     document.writeln("<td>"+veri[i].KitapID+"</td>");
                //     document.writeln("<td>"+veri[i].KitapAd+"</td>");
                //     document.writeln("<td>"+veri[i].KitapYazar+"</td>");
                //     document.writeln("<td>"+veri[i].kitapFiyat+"</td>")
                // }
                document.writeln("<tr>")
                

                for(prop in veri[i])
                {
                    document.writeln("<td>"+veri[i][prop]+"</td>")
                }
                
                document.writeln("</tr>")
            }
            document.writeln("</table>");
        }
        
        function MinMaxRandom(min,max)
        {
            let fark=max-min;
            let rnd=Math.floor(Math.random()*fark);

            return min+rnd;
        }

        function RenkOlustur(r,g,b,adet)
        {
            const renkler=[];
            for(let i=0;i<adet;i++)
            {
                renkler.push("rgb("+(r+(i*15))+","+(g+(i*15))+","+(b+(i*15))+")");
            }
            return renkler;
        }