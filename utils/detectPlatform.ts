export const detectIOS = () => {
  if (typeof window === "undefined") return false;
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
};

export const detectAndroid = () => {
  if (typeof window === "undefined") return false;
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /android/.test(userAgent);
};

export const detectMobile = () => {
  if (typeof window === "undefined") return false;
  return detectIOS() || detectAndroid();
};

// Оценить высоту видимой области экрана
export const getViewportHeight = () => {
  if (typeof window === "undefined") return 0;
  return window.innerHeight;
};

// Оценить высоту навигационной панели Android (приблизительно)
export const getAndroidNavbarHeight = () => {
  if (!detectAndroid()) return 0;
  // Обычно навигационная панель на Android составляет 48-56dp
  // Мы используем приблизительное значение 48px
  return 48;
};

// Получить реальную видимую высоту (учитывая навигационную панель)
export const getVisibleScreenHeight = () => {
  const viewportHeight = getViewportHeight();
  const navbarHeight = getAndroidNavbarHeight();

  // Для Android вычитаем предполагаемую высоту панели навигации
  if (detectAndroid()) {
    return viewportHeight - navbarHeight;
  }

  return viewportHeight;
};
