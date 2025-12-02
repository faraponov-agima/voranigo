import { ArrowRight } from "lucide-react";

import Logo from "@/assets/logo.svg";
import { Block } from "@/components/block";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <Block
      containerClassName=" bg-[#151518] py-16 xl:py-20"
      contentClassName="grid gap-x-8 gap-y-12 xl:grid-cols-2 xl:gap-x-24 xl:gap-y-16"
    >
      <div>
        <a href="https://servier.ru/" target="_blank" rel="noopener noreferrer">
          <Logo className="h-10 w-auto xl:h-12" />
        </a>
      </div>

      <div>
        <p className="max-w-2xl text-lg font-medium xl:text-xl">
          МАТЕРИАЛ ПРЕДНАЗНАЧЕН ДЛЯ СПЕЦИАЛИСТОВ ЗДРАВООХРАНЕНИЯ
        </p>
      </div>

      <div className="space-y-8 text-sm leading-relaxed text-gray-300 xl:text-base">
        <div>
          <h3 className="mb-4 font-medium text-white">АДРЕС ОФИСА:</h3>
          <div className="space-y-1">
            <p>АО «Сервье»:</p>
            <p>125196, Москва, ул. Лесная, д.7, этажи 7/8/9</p>
            <p>Бизнес-центр Белые Сады</p>
            <p>
              Телефон:{" "}
              <a
                href="tel:+74959370700"
                className="hover:text-white hover:underline"
              >
                +7 495 937-07-00
              </a>
            </p>
            <a
              href="mailto:ru.communications@servier.com"
              className="hover:text-white hover:underline"
            >
              ru.communications@servier.com
            </a>
          </div>
        </div>

        <div>
          <p>
            ООО «СЕРВЬЕ РУС», 108828 г. Москва, пос. Краснопахорское, квартал
            158, вл.2, стр.1, кабинет 169
          </p>
          <p>
            Тел.{" "}
            <a
              href="tel:+74952258010"
              className="hover:text-white hover:underline"
            >
              +7 (495) 225-80-10
            </a>
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <div className="space-y-4 text-sm text-gray-300 xl:text-base">
          <h3 className="font-medium text-white">
            СООБЩИТЬ О НЕЖЕЛАТЕЛЬНОМ ЯВЛЕНИИ
          </h3>
          <p>
            передать запрос по препарату или связаться по другим вопросам Вы
            можете через форму обратной связи
          </p>
        </div>

        <Button
          asChild
          className="group w-full justify-between text-lg font-medium xl:w-auto xl:min-w-[320px]"
        >
          <a
            href="https://servier.ru/#form"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Форма обратной связи</span>
            <ArrowRight className="size-6 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </div>

      <div className="col-span-full flex flex-col justify-between gap-8  pt-8 text-xs text-gray-400 xl:flex-row xl:text-sm border-t border-white/10">
        <p>© 2025 LES LABORATOIRES SERVIER. АО «Сервье». Все права защищены</p>
        <div className="flex flex-col gap-2 xl:flex-row xl:gap-8">
          <a
            href="https://servier.ru/terms-of-use/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Условия использования
          </a>
          <a
            href="https://servier.ru/politika-v-otnoshenii-obrabotki-personalnyh-dannyh/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Политика в отношении обработки персональных данных
          </a>
        </div>
      </div>
    </Block>
  );
}
