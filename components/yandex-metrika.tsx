"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    ym?: (
      counterId: number,
      method: string,
      ...args: unknown[]
    ) => void;
  }
}

export function YandexMetrika() {
  // Функция для отправки виртуального просмотра страницы
  const sendVirtualPageView = () => {
    if (typeof window === "undefined") return;

    // Инициализируем dataLayer если его нет
    window.dataLayer = window.dataLayer || [];

    // Получаем полный URL с параметрами и якорями
    const fullUrl = window.location.href;
    
    // Получаем заголовок страницы
    const pageTitle = document.title || "";

    // Отправляем событие в dataLayer
    window.dataLayer.push({
      event: "virtualPageView",
      dl_page_url: fullUrl,
      dl_page_title: pageTitle,
    });
  };

  useEffect(() => {
    // Инициализируем dataLayer сразу
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
    }

    // Отправляем виртуальный просмотр при первой загрузке страницы
    // Задержка для инициализации Метрики
    const initialTimer = setTimeout(() => {
      sendVirtualPageView();
    }, 500);

    // Отслеживаем изменения истории браузера (для SPA навигации)
    const handlePopState = () => {
      setTimeout(() => {
        sendVirtualPageView();
      }, 100);
    };

    // Перехватываем pushState и replaceState для отслеживания программной навигации
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function (...args) {
      originalPushState.apply(history, args);
      setTimeout(() => {
        sendVirtualPageView();
      }, 100);
    };

    history.replaceState = function (...args) {
      originalReplaceState.apply(history, args);
      setTimeout(() => {
        sendVirtualPageView();
      }, 100);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      clearTimeout(initialTimer);
      window.removeEventListener("popstate", handlePopState);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, []);

  return (
    <>
      {/* Yandex.Metrika counter */}
      <Script
        id="yandex-metrika"
        strategy="afterInteractive"
        onLoad={() => {
          // Инициализируем dataLayer перед загрузкой скрипта Метрики
          if (typeof window !== "undefined") {
            window.dataLayer = window.dataLayer || [];
          }
        }}
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');

            ym(105216738, 'init', {defer:true, ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
            ym(46732497, 'init', {defer:true, webvisor:true, trackHash:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
            ym(46732515, 'init', {defer:true, webvisor:true, trackHash:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
            ym(101314243, 'init', {defer:true, webvisor:true, clickmap:true, accurateTrackBounce:true, trackLinks:true});
          `,
        }}
      />
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/105216738"
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
        <div>
          <img
            src="https://mc.yandex.ru/watch/46732497"
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
        <div>
          <img
            src="https://mc.yandex.ru/watch/46732515"
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
        <div>
          <img
            src="https://mc.yandex.ru/watch/101314243"
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
}

