import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule,RouterLink],
})
export class HomePage {
  perfil = {
    nome: 'Carlitos', 
    profissao: 'Professor', 
    mencao: '@carlitos', 
    biografia: 'Professor e gestor de projetos', 
    cidade: 'Tatuí', 
    estado: 'São Paulo', 
    idioma: 'Português',
    conta_criada_em: 'Janeiro 2020',
    foto_perfil: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }

  metricas_sociais = {
    curtidas: '41.8K',
    seguidores: 853,
    amigos: '250'
  }

  postagens = [
    {
      perfil: {
        nome: 'Messi',
        mencao_perfil: '@meçi10',
        foto: 'https://pbs.twimg.com/profile_images/1358528753350115328/RZKRNQbt_400x400.jpg'
      },
      postagem: {
        mensagem: 'Sou lindo',
        foto: 'https://s2-gshow.glbimg.com/X1dzJaMADsH3Iyoh6EE2tcjXhAg=/0x0:1080x1043/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2022/q/d/lMGGOZRvaelLwkQSkjnw/messi.jpg'
      }
    },
    {
      perfil: {
        nome: 'P.Coutinho',
        mencao_perfil: '@coutinhop',
        foto: 'data:image/jpeg;base64,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'
      },
      postagem: {
        mensagem: 'dia de tbt!!',
        foto: 'https://s2-ge.glbimg.com/RswsM2l37qa2tq7zKb7_xU9jsZc=/0x0:2666x1772/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/C/0/9lV8M4Tzmam7Jljh4BfQ/2020-08-23t212502z-855771963-rc2xji9vsav8-rtrmadp-3-soccer-champions-bay-psg-report.jpg'
      }
    },
    {
      perfil: {
        nome: 'Ribamar',
        mencao_perfil: '@ribagol',
        foto: 'https://ogimg.infoglobo.com.br/in/24029035-439-61f/FT1086A/lucas-ribamar.jpg'
      },
      postagem: {
        mensagem: 'Ribamar em alto mar logo será realidade',
        foto: null
      }
    },
    {
      perfil: {
        nome: 'Marcos',
        mencao_perfil: '@marcos',
        foto: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      postagem: {
        mensagem: 'Se colocar uma calculadora na geladeira, terei tudo friamente calculado?',
        foto: null
      }
    },
    {
      perfil: {
        nome: 'Marcos',
        mencao_perfil: '@marcos',
        foto: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      postagem: {
        mensagem: 'Se colocar uma calculadora na geladeira, terei tudo friamente calculado?',
        foto: null
      }
    },
    {
      perfil: {
        nome: 'Gabriel Martinelli',
        mencao_perfil: '@ga_mart',
        foto: 'https://pbs.twimg.com/media/Ft1pg2rWYAU9lIy.jpg:large'
      },
      postagem: {
        mensagem: 'Só faltava 4 min...',
        foto: 'https://lncimg.lance.com.br/cdn-cgi/image/width=3840,height=undefined,quality=75/uploads/2022/12/09/639377d1ca83a.jpeg'
      }
    },
    {
      perfil: {
        nome: 'Mônica',
        mencao_perfil: '@mmmica',
        foto: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      postagem: {
        mensagem: 'Galera! Se dois irmãos gêmeos se casam com duas irmãs gêmeas, os filhos vão ser iguais???',
        foto: null
      }
    },
    {
      perfil: {
        nome: 'Koringa',
        mencao_perfil: '@kor',
        foto: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      postagem: {
        mensagem: 'Como fala o problema é seu na língua da sua região??',
        foto: 'https://images.pexels.com/photos/50859/pexels-photo-50859.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    },
    {
      perfil: {
        nome: 'Juliana',
        mencao_perfil: '@juliana',
        foto: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      postagem: {
        mensagem: 'Alguém sabe que dinossauro é esse?',
        foto: 'https://images.pexels.com/photos/161959/prehistoric-times-urtier-museum-exhibit-161959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    {
      perfil: {
        nome: 'Juliana',
        mencao_perfil: '@juliana',
        foto: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      postagem: {
        mensagem: 'Alguém sabe o nome dessa comida?',
        foto: 'https://images.pexels.com/photos/410857/pexels-photo-410857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    {
      perfil: {
        nome: 'Julia',
        mencao_perfil: '@julia',
        foto: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      },
      postagem: {
        mensagem: 'O que você faria se soubesse que tem apenas mais 24 horas de vida?',
        foto: null
      }
    },
    {
      perfil: {
        nome: 'Pedro',
        mencao_perfil: '@pedro',
        foto: 'https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      postagem: {
        mensagem: 'Não confie em tudo que lê na internet',
        foto: 'https://images.pexels.com/photos/47453/pexels-photo-47453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    {
      perfil: {
        nome: 'Maria',
        mencao_perfil: '@maria',
        foto: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      postagem: {
        mensagem: 'Hoje é um bom dia para ser feliz',
        foto: null
      }
    },
    {
      perfil: {
        nome: 'Ana',
        mencao_perfil: '@ana',
        foto: 'https://images.pexels.com/photos/3645474/pexels-photo-3645474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      postagem: {
        mensagem: 'Por que não existem elevadores no Pólo Norte?',
        foto: 'https://images.pexels.com/photos/6212265/pexels-photo-6212265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    {
      perfil: {
        nome: 'Gabriel',
        mencao_perfil: '@gabriel',
        foto: 'https://images.pexels.com/photos/7585838/pexels-photo-7585838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
        postagem: {
          mensagem: 'Qual é a melhor forma de se preparar para uma entrevista de emprego?',
          foto: null
        }
      },
      {
        perfil: {
          nome: 'Laura',
          mencao_perfil: '@laura',
          foto: 'https://images.pexels.com/photos/6695787/pexels-photo-6695787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        postagem: {
          mensagem: 'Você já ouviu falar da técnica Pomodoro?',
          foto: 'https://images.pexels.com/photos/1181377/pexels-photo-1181377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }
      },
      {
        perfil: {
          nome: 'Felipe',
          mencao_perfil: '@felipe',
          foto: 'https://images.pexels.com/photos/3991820/pexels-photo-3991820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        postagem: {
          mensagem: 'O que é mais importante na vida?',
          foto: null
        }
      },
      {
        perfil: {
          nome: 'Julia',
          mencao_perfil: '@julia',
          foto: 'https://images.pexels.com/photos/4722061/pexels-photo-4722061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        postagem: {
          mensagem: 'Como manter uma rotina de estudos eficiente?',
          foto: 'https://images.pexels.com/photos/5792692/pexels-photo-5792692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }
      }    
  ]
  seguir_status: string = 'Seguir'
  setSeguir(){
    if (this.seguir_status == 'Seguir') {
      this.seguir_status = 'Seguindo ⇓';
      this.metricas_sociais.seguidores +=1;
    }else{
      this.seguir_status = 'Seguir';
      this.metricas_sociais.seguidores -=1;
    }

  }
}
