import { SCREEN_TYPE, ScreenType } from '../constants';

export const getAssistantResponse = (
  userInput: string,
  setScreen: (screen: ScreenType) => void
): string => {
  const input = userInput.toLowerCase();

  if (input.includes('ana sayfa') || input.includes('home') || input.includes('3d')) {
    setScreen(SCREEN_TYPE.HOME);
    return 'Ana Sayfa ekranına sizi yönlendirdim. 3D düzlemi döndürmek için sürükleyebilir, rengi değiştirmek için dokunabilirsiniz.';
  }

  if (input.includes('hastalık') || input.includes('disease') || input.includes('kamera')) {
    setScreen(SCREEN_TYPE.DISEASE);
    return 'Hastalık Tespiti ekranına yönlendirdim. Bitkileri taramak için kamerayı kullanabilirsiniz.';
  }

  if (input.includes('ayarlar') || input.includes('settings')) {
    setScreen(SCREEN_TYPE.SETTINGS);
    return 'Ayarlar ekranına yönlendirdim. Tema ayarlarınızı yapabilir ve çıkış yapabilirsiniz.';
  }

  if (input.includes('çizelge') || input.includes('timetable')) {
    setScreen(SCREEN_TYPE.TIMETABLE);
    return 'Çizelge ekranına yönlendirdim. Zamanlanmış görevlerinizi buradan yönetebilirsiniz.';
  }

  if (input.includes('nasıl') || input.includes('how')) {
    return 'TarasMobil, tarım için dijital ikiz platformudur. Ana Sayfada 3D modeli inceleyebilir, Hastalık Tespitinde bitkileri tarayabilir, Çizelgede görevleri takip edebilir ve Ayarlar\'da tercihlerinizi yönetebilirsiniz.';
  }

  return 'Anladığım gibi: "' + userInput + '". Daha spesifik bir soru sorabilir misiniz? Ana Sayfa, Hastalık Tespiti, Çizelge veya Ayarlar hakkında yardım isteyebilirsiniz.';
};
