import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18nextConfig from '../next-i18next.config'
import { PackagesApi } from '../models/package';
import { ProductApi } from '../models/blog';
import { ServiceApi } from '../models/service';

export const getI18nPaths = async () => {
  const json = await new PackagesApi().getAll();
  const en = json.map((p) => ({
    params: {
      locale: "en",
      slug: p.slug,
    }
  }));
  const vi = json.map((p) => ({
    params: {
      locale: "vi",
      slug: p.slug,
    }
  }));
  const sum = en.concat(vi);
  return sum;
}

export const getI18nPathsPackage = async () => {
  const json = await new PackagesApi().getAll();
  const en = json.map((p) => ({
    params: {
      locale: "en",
      slug: p.slug,
    }
  }));
  const vi = json.map((p) => ({
    params: {
      locale: "vi",
      slug: p.slug,
    }
  }));
  const sum = en.concat(vi);
  return sum;
}

export const getI18nPathsService = async () => {
  const json = await new ServiceApi().getAll();
  const en = json.map((p) => ({
    params: {
      locale: "en",
      slug: p.slug,
    }
  }));
  const vi = json.map((p) => ({
    params: {
      locale: "vi",
      slug: p.slug,
    }
  }));
  const sum = en.concat(vi);
  return sum;
}

export const getI18nPathsProduct = async () => {
  const json = await new ProductApi().getAll();
  const en = json.map((p) => ({
    params: {
      locale: "en",
      slug: p.slug,
    }
  }));
  const vi = json.map((p) => ({
    params: {
      locale: "vi",
      slug: p.slug,
    }
  }));
  const sum = en.concat(vi);
  return sum;
}

export const getStaticPathsPackages = async () => {
  return {
    fallback: false,
    paths: await getI18nPathsPackage()
  }
}

export const getStaticPathsServices = async () => {
  return {
    fallback: false,
    paths: await getI18nPathsService()
  }
}

export const getStaticPathsProducts = async () => {
  return {
    fallback: false,
    paths: await getI18nPathsProduct()
  }
}

export const getStaticPaths = () => ({
  fallback: false,
  paths: [{
    params: {
      locale: 'en',
      slug: "test",
      label: "test2",
    }
  }],
})

export async function getI18nProps(ctx, ns = ['common']) {
  const locale = ctx?.params?.locale
  let props = {
    ...(await serverSideTranslations(locale, ns)),
    label: "",
    desc: "",
    image_url: "",
    sub_packages: [],
  }
  return props
}

export function makeStaticProps(ns = {}) {
  return async function getStaticProps(ctx) {
    return {
      props: await getI18nProps(ctx, ns),
    }
  }
}

export async function getStaticPropsProduct(ctx) {
  const params = ctx?.params;
  const { locale, slug } = params;
  const product = await new ProductApi().findOne(slug);
  return {
    props: {
      id: product.id,
      label: product.label,
      en_label: product.en_label,
      desc: product.desc,
      en_desc: product.en_desc,
      medicines: product.medicines,
      image_url: product.image_url,
      image_placeholder_url: product.image_placeholder_url,
      price: product.price,
    }
  }
}

export async function getStaticPropsService(ctx) {
  const params = ctx?.params;
  const { locale, slug } = params;
  const service = await new ServiceApi().findOne(slug);
  return {
    props: {
      id: service.id,
      label: service.label,
      en_label: service.en_label,
      slug: service.slug,
      desc: service.desc,
      en_desc: service.en_desc,
      detail: service.detail,
      en_detail: service.en_detail,
      image_url: service.image ? service.image.url : '',
      placeholder_image_url: service.image ? service.image.formats.thumbnail.url : '',
      price: service.price ?? 0,
      show_buy_btn: service.show_buy_btn ?? false,
      show_inquiry_form: service.show_inquiry_form ?? false,
      show_booking_btn: service.show_booking_btn ?? false,
    }
  }
}

export async function getStaticPropsPackage(ctx) {
  const params = ctx?.params;
  const { locale, slug } = params;
  const pkg = await new PackagesApi().findOne(slug);
  console.log('slug', pkg)
  return {
    props: {
      label: pkg.label ?? "",
      desc: pkg.desc ?? "",
      en_desc: pkg.en_desc ?? "",
      image_url: pkg.image_url ?? "",
      detail: pkg.detail ?? "",
      sub_packages: pkg.sub_packages ?? [],
      en_label: pkg.en_label ?? "",
      show_additional_fee: pkg.show_additional_fee ?? "",
      show_inquiry_form: pkg.show_inquiry_form ?? "",
    }
  }
}