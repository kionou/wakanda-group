<template>
    <div>
        <!-- Bouton flottant pour ouvrir le chat -->
        <div id="J_xiaomi_dialog" style="position: fixed; z-index: 10; right: 20px; bottom: 50px;">
            <div class="J_weak" @click="toggleDropdown" style="cursor: pointer;">
                <img src="//ae01.alicdn.com/kf/H794f99266c5d4fd387a337d99a786172K.png" alt="Chatbot" class="alime-avatar">
                <span class="alime-text">Besoin d'aide?</span>
            </div>
    
            <!-- Contenu de la chatbox -->
            <transition name="J_Dialog">
                <div v-if="isOpen" class="J_Dialog alicare-dialog-undefined"
                    style="position: absolute; bottom: 110px; right: 110px;">
                    <div class="alicare-dialog-wrapper"
                        style="background: #fff; width: 450px; height: 400px; box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2); border-radius: 10px;">
                        <div class="alicare-fake-header"
                            style="background: #fff; color: #000; padding: 10px; display: flex; justify-content: space-between; border-radius: 10px;">
                            <span>Chat Assistance</span>
                            <a class="alicare-im-close" @click="toggleDropdown" style="cursor: pointer; ">
                                <img src="//gw.alicdn.com/tfs/TB1lWlNOkvoK1RjSZPfXXXPKFXa-29-29.svg" alt="Fermer" style="width: 15px;">
                            </a>
                        </div>
    
                          <!-- Zone de contenu du chat -->
            <div class="chat-content" style="padding: 10px; overflow-y: auto; height: calc(100% - 50px); background-color: #f1f1f1;">
              <!-- Boucle pour afficher les messages -->
              <div v-for="(msg, index) in messages" :key="index" class="message">
                <div v-if="msg.sender === 'user'" class="user-message" style="text-align: right;">
                  <span class="message-text" style="background-color: #007bff; color: white; padding: 10px; border-radius: 10px; display: inline-block;">
                    {{ msg.text }}
                  </span>
                </div>
                <div v-else class="bot-message" style="text-align: left;">
                  <span class="message-text" style="background-color: #fff; padding: 10px; border-radius: 10px; display: inline-block;">
                    {{ msg.text }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Zone de saisie pour l'utilisateur -->
            <div class="chat-footer" style="padding: 10px; background: #f8f8f8; border-top: 1px solid #ddd; border-radius: 0 0 10px 10px;">
              <!-- Input pour le message -->
              <div class="input-group">
                <input type="text" class="form-control" v-model="userMessage" placeholder="Écrivez votre message ici..." @keyup.enter="sendMessage" style="border-radius: 20px; padding-right: 40px;" />

                <!-- Bouton avec icône à la place du texte "Envoyer" -->
                <button class="btn btn-primary send-btn" @click="sendMessage" style="border-radius: 50%; margin-left: 10px; background-color: var(--fc-primary);">
                  <i class="bi bi-send"></i>
                </button>
              </div>
            </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>
  
  <script>
export default {
  data() {
    return {
      isOpen: false, // La chatbox est fermée par défaut
      userMessage: '', // Stocker le message de l'utilisateur
      messages: [],
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen; // Ouvre/ferme la chatbox au clic
    },
    sendMessage() {
      if (this.userMessage.trim() !== '') {
        // Ajouter le message de l'utilisateur à la conversation
        this.messages.push({ text: this.userMessage, sender: 'user' });

        // Sauvegarder le message de l'utilisateur
        const userInput = this.userMessage;

        // Réinitialiser le champ de saisie
        this.userMessage = '';

        // Ajouter une réponse automatique après un petit délai
        setTimeout(() => {
          this.autoReply(userInput);
        }, 1000); // Délai de 1 seconde pour simuler la réponse
      }
    },
    autoReply(userInput) {
      let botResponse = '';

      // Logique simple de réponse automatique
      if (userInput.toLowerCase().includes('commande')) {
        botResponse = 'Vous avez un problème avec une commande. Nous allons vous aider.';
      } else if (userInput.toLowerCase().includes('remboursement')) {
        botResponse = 'Les problèmes de remboursement peuvent être résolus en contactant notre service client.';
      } else if (userInput.toLowerCase().includes('livraison')) {
        botResponse = 'Si vous avez des soucis de livraison, veuillez nous fournir plus de détails.';
      } else {
        botResponse = 'Je ne comprends pas encore cette question, mais je vais m\'améliorer !';
      }

      // Ajouter la réponse du bot à la conversation
      this.messages.push({ text: botResponse, sender: 'bot' });
    }
  }
};
  </script>
  
  <style scoped>
#J_xiaomi_dialog {
    padding-top: 10px;
    position: fixed;
    font-family: PingFang SC, HEITI SC, Microsoft YaHei, STHeiti Light, sans-serif !important;
}

#J_xiaomi_dialog .J_weak {
    background-color: #fff;
    width: 150px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    border-radius: 22px;
    color: rgba(0, 0, 0, .87);
    cursor: pointer;
    box-shadow: 0 12px 12px 0 rgba(9, 7, 7, .03), 0 8px 4px 0 rgba(0, 0, 0, .04);
}

#J_xiaomi_dialog .J_weak .alime-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#J_xiaomi_dialog .J_weak img {
    width: 48px !important;
    height: 48px;
    position: absolute;
    top: -48px;
    left: 50%;
    transform: translateX(-50%);
}

#J_xiaomi_dialog .J_weak .alime-text {
    font-size: 14px;
    font-weight: bold;
    margin-left: 10px;
    vertical-align: middle;
}

.chat-content ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.chat-content ul li {
    margin-bottom: 10px;
    padding: 10px;
    background-color: #fff;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.chat-content ul li:hover {
    background-color: #e0e0e0;
}

.send-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  color: #fff;
  transition: background-color 0.3s ease;

}

.send-btn:hover {
  background-color: #fff !important;
  color: var(--fc-primary);
  border: 1px solid var(--fc-primary);
}

.input-group {
  position: relative;
  width: 100%;
}

.input-group input {
  width: calc(100% - 50px);
  padding-left: 15px;
  padding-right: 15px;
}

/* Animation for the chatbox */
.J_Dialog {
    transition: all 0.3s ease-in-out;
}

.J_Dialog-enter {
    opacity: 0;
    transform: translateY(10px);
}

.J_Dialog-enter-active {
    opacity: 1;
    transform: translateY(0);
}

.J_Dialog-leave {
    opacity: 1;
}

.J_Dialog-leave-active {
    opacity: 0;
    transform: translateY(10px);
}

.message-text {
  max-width: 60%;
  word-wrap: break-word;
}

.user-message {
  margin-bottom: 10px;
}

.bot-message {
  margin-bottom: 10px;
}
</style>
  