// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ewmXQJz5QcseZaj8LdYn4d
// Component: Hfcv71zWsenA5Y
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { PlasmicHead } from "@plasmicapp/react-web"; // plasmic-import: AEGdB2KywRfR/codeComponent

import { useScreenVariants as useScreenVariantspm7PaVxsIGwRo0 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Pm7PAVxsIGwRo0/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_feed_next_ai.module.css"; // plasmic-import: ewmXQJz5QcseZaj8LdYn4d/projectcss
import sty from "./PlasmicBodyArticle1.module.css"; // plasmic-import: Hfcv71zWsenA5Y/css

export type PlasmicBodyArticle1__VariantMembers = {};
export type PlasmicBodyArticle1__VariantsArgs = {};
type VariantPropType = keyof PlasmicBodyArticle1__VariantsArgs;
export const PlasmicBodyArticle1__VariantProps = new Array<VariantPropType>();

export type PlasmicBodyArticle1__ArgsType = {};
type ArgPropType = keyof PlasmicBodyArticle1__ArgsType;
export const PlasmicBodyArticle1__ArgProps = new Array<ArgPropType>();

export type PlasmicBodyArticle1__OverridesType = {
  article1Body?: p.Flex<"div">;
  heroHeadline?: p.Flex<"div">;
  heroSubHeadline?: p.Flex<"div">;
  heroImage?: p.Flex<typeof p.PlasmicImg>;
  paragraph1?: p.Flex<"div">;
  image1?: p.Flex<typeof p.PlasmicImg>;
  paragraph2?: p.Flex<"div">;
  image2?: p.Flex<typeof p.PlasmicImg>;
  paragraph3?: p.Flex<"div">;
  image3?: p.Flex<typeof p.PlasmicImg>;
  paragraph4?: p.Flex<"div">;
  image4?: p.Flex<typeof p.PlasmicImg>;
  paragraph5?: p.Flex<"div">;
  image5?: p.Flex<typeof p.PlasmicImg>;
  paragraph6?: p.Flex<"div">;
  head?: p.Flex<typeof PlasmicHead>;
  image6?: p.Flex<typeof p.PlasmicImg>;
  paragraph7?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  text?: p.Flex<"div">;
  image7?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultBodyArticle1Props {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBodyArticle1__RenderFunc(props: {
  variants: PlasmicBodyArticle1__VariantsArgs;
  args: PlasmicBodyArticle1__ArgsType;
  overrides: PlasmicBodyArticle1__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantspm7PaVxsIGwRo0()
  });

  return (
    <div
      data-plasmic-name={"article1Body"}
      data-plasmic-override={overrides.article1Body}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.article1Body
      )}
    >
      <div
        data-plasmic-name={"heroHeadline"}
        data-plasmic-override={overrides.heroHeadline}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.heroHeadline
        )}
      >
        {hasVariant(globalVariants, "screen", "mobileOnly") ? (
          <div
            className={projectcss.__wab_expr_html_text}
            dangerouslySetInnerHTML={{
              __html: (() => {
                try {
                  return $ctx.fetchDyanamicData.records[0].fields.heroHeadline;
                } catch (e) {
                  if (e instanceof TypeError) {
                    return "Enter some text";
                  }
                  throw e;
                }
              })()
            }}
          />
        ) : (
          <div
            className={projectcss.__wab_expr_html_text}
            dangerouslySetInnerHTML={{
              __html: (() => {
                try {
                  return $ctx.fetchDyanamicData.records[0].fields.heroHeadline;
                } catch (e) {
                  if (e instanceof TypeError) {
                    return "Enter some text";
                  }
                  throw e;
                }
              })()
            }}
          />
        )}
      </div>

      <div
        data-plasmic-name={"heroSubHeadline"}
        data-plasmic-override={overrides.heroSubHeadline}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.heroSubHeadline
        )}
      >
        {hasVariant(globalVariants, "screen", "mobileOnly") ? (
          <div
            className={projectcss.__wab_expr_html_text}
            dangerouslySetInnerHTML={{
              __html: (() => {
                try {
                  return $ctx.fetchDyanamicData.records[0].fields
                    .heroSubHeadline;
                } catch (e) {
                  if (e instanceof TypeError) {
                    return "Enter some text";
                  }
                  throw e;
                }
              })()
            }}
          />
        ) : (
          <div
            className={projectcss.__wab_expr_html_text}
            dangerouslySetInnerHTML={{
              __html: (() => {
                try {
                  return $ctx.fetchDyanamicData.records[0].fields
                    .heroSubHeadline;
                } catch (e) {
                  if (e instanceof TypeError) {
                    return "Enter some text";
                  }
                  throw e;
                }
              })()
            }}
          />
        )}
      </div>

      <p.PlasmicLink
        className={classNames(projectcss.all, projectcss.a, sty.link__lMfje)}
        component={Link}
        href={(() => {
          try {
            return $ctx.fetchDyanamicData.records[0].fields["Step 2 URL"];
          } catch (e) {
            if (e instanceof TypeError) {
              return undefined;
            }
            throw e;
          }
        })()}
        platform={"nextjs"}
      >
        <p.PlasmicImg
          data-plasmic-name={"heroImage"}
          data-plasmic-override={overrides.heroImage}
          alt={""}
          className={classNames(sty.heroImage)}
          displayHeight={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("auto" as const)
              : ("auto" as const)
          }
          displayMaxHeight={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("400px" as const)
              : ("400px" as const)
          }
          displayMaxWidth={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("100%" as const)
              : ("100%" as const)
          }
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("354px" as const)
              : ("750px" as const)
          }
          loading={"lazy" as const}
          src={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? (() => {
                  try {
                    return $ctx.fetchDyanamicData.records[0].fields.heroImage[0]
                      .url;
                  } catch (e) {
                    if (e instanceof TypeError) {
                      return undefined;
                    }
                    throw e;
                  }
                })()
              : (() => {
                  try {
                    return $ctx.fetchDyanamicData.records[0].fields.heroImage[0]
                      .url;
                  } catch (e) {
                    if (e instanceof TypeError) {
                      return undefined;
                    }
                    throw e;
                  }
                })()
          }
        />
      </p.PlasmicLink>

      <div
        data-plasmic-name={"paragraph1"}
        data-plasmic-override={overrides.paragraph1}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.paragraph1
        )}
      >
        {hasVariant(globalVariants, "screen", "mobileOnly")
          ? (() => {
              try {
                return $ctx.fetchDyanamicData.records[0].fields.paragraph1;
              } catch (e) {
                if (e instanceof TypeError) {
                  return "Enter some text";
                }
                throw e;
              }
            })()
          : (() => {
              try {
                return $ctx.fetchDyanamicData.records[0].fields.paragraph1;
              } catch (e) {
                if (e instanceof TypeError) {
                  return "Enter some text";
                }
                throw e;
              }
            })()}
      </div>

      <p.PlasmicLink
        className={classNames(projectcss.all, projectcss.a, sty.link__pwapu)}
        component={Link}
        href={(() => {
          try {
            return $ctx.fetchDyanamicData.records[0].fields["Step 2 URL"];
          } catch (e) {
            if (e instanceof TypeError) {
              return undefined;
            }
            throw e;
          }
        })()}
        platform={"nextjs"}
      >
        <p.PlasmicImg
          data-plasmic-name={"image1"}
          data-plasmic-override={overrides.image1}
          alt={""}
          className={classNames(sty.image1)}
          displayHeight={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("auto" as const)
              : ("auto" as const)
          }
          displayMaxHeight={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("400px" as const)
              : ("400px" as const)
          }
          displayMaxWidth={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("100%" as const)
              : ("100%" as const)
          }
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("354px" as const)
              : ("750px" as const)
          }
          loading={"lazy" as const}
          src={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? (() => {
                  try {
                    return $ctx.fetchDyanamicData.records[0].fields.image1[0]
                      .url;
                  } catch (e) {
                    if (e instanceof TypeError) {
                      return undefined;
                    }
                    throw e;
                  }
                })()
              : (() => {
                  try {
                    return $ctx.fetchDyanamicData.records[0].fields.image1[0]
                      .url;
                  } catch (e) {
                    if (e instanceof TypeError) {
                      return undefined;
                    }
                    throw e;
                  }
                })()
          }
        />
      </p.PlasmicLink>

      <div
        data-plasmic-name={"paragraph2"}
        data-plasmic-override={overrides.paragraph2}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.paragraph2
        )}
      >
        {hasVariant(globalVariants, "screen", "mobileOnly")
          ? (() => {
              try {
                return $ctx.fetchDyanamicData.records[0].fields.paragraph2;
              } catch (e) {
                if (e instanceof TypeError) {
                  return "Enter some text";
                }
                throw e;
              }
            })()
          : (() => {
              try {
                return $ctx.fetchDyanamicData.records[0].fields.paragraph2;
              } catch (e) {
                if (e instanceof TypeError) {
                  return "Enter some text";
                }
                throw e;
              }
            })()}
      </div>

      <p.PlasmicLink
        className={classNames(projectcss.all, projectcss.a, sty.link__zqdsT)}
        component={Link}
        href={(() => {
          try {
            return $ctx.fetchDyanamicData.records[0].fields["Step 2 URL"];
          } catch (e) {
            if (e instanceof TypeError) {
              return undefined;
            }
            throw e;
          }
        })()}
        platform={"nextjs"}
      >
        <p.PlasmicImg
          data-plasmic-name={"image2"}
          data-plasmic-override={overrides.image2}
          alt={""}
          className={classNames(sty.image2)}
          displayHeight={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("auto" as const)
              : ("auto" as const)
          }
          displayMaxHeight={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("300px" as const)
              : ("400px" as const)
          }
          displayMaxWidth={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("100%" as const)
              : ("100%" as const)
          }
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("354px" as const)
              : ("750px" as const)
          }
          loading={"lazy" as const}
          src={(() => {
            try {
              return $ctx.fetchDyanamicData.records[0].fields.image2[0].url;
            } catch (e) {
              if (e instanceof TypeError) {
                return undefined;
              }
              throw e;
            }
          })()}
        />
      </p.PlasmicLink>

      <div
        data-plasmic-name={"paragraph3"}
        data-plasmic-override={overrides.paragraph3}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.paragraph3
        )}
      >
        {(() => {
          try {
            return $ctx.fetchDyanamicData.records[0].fields.paragraph3;
          } catch (e) {
            if (e instanceof TypeError) {
              return "Enter some text";
            }
            throw e;
          }
        })()}
      </div>

      <p.PlasmicLink
        className={classNames(projectcss.all, projectcss.a, sty.link__eq6I)}
        component={Link}
        href={(() => {
          try {
            return $ctx.fetchDyanamicData.records[0].fields["Step 2 URL"];
          } catch (e) {
            if (e instanceof TypeError) {
              return undefined;
            }
            throw e;
          }
        })()}
        platform={"nextjs"}
      >
        <p.PlasmicImg
          data-plasmic-name={"image3"}
          data-plasmic-override={overrides.image3}
          alt={""}
          className={classNames(sty.image3)}
          displayHeight={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("auto" as const)
              : ("auto" as const)
          }
          displayMaxHeight={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("400px" as const)
              : ("400px" as const)
          }
          displayMaxWidth={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("100%" as const)
              : ("100%" as const)
          }
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("354px" as const)
              : ("750px" as const)
          }
          loading={"lazy" as const}
          src={(() => {
            try {
              return $ctx.fetchDyanamicData.records[0].fields.image3[0].url;
            } catch (e) {
              if (e instanceof TypeError) {
                return undefined;
              }
              throw e;
            }
          })()}
        />
      </p.PlasmicLink>

      <div
        data-plasmic-name={"paragraph4"}
        data-plasmic-override={overrides.paragraph4}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.paragraph4
        )}
      >
        {(() => {
          try {
            return $ctx.fetchDyanamicData.records[0].fields.paragraph4;
          } catch (e) {
            if (e instanceof TypeError) {
              return "Enter some text";
            }
            throw e;
          }
        })()}
      </div>

      <p.PlasmicLink
        className={classNames(projectcss.all, projectcss.a, sty.link__iUuum)}
        component={Link}
        href={(() => {
          try {
            return $ctx.fetchDyanamicData.records[0].fields["Step 2 URL"];
          } catch (e) {
            if (e instanceof TypeError) {
              return undefined;
            }
            throw e;
          }
        })()}
        platform={"nextjs"}
      >
        <p.PlasmicImg
          data-plasmic-name={"image4"}
          data-plasmic-override={overrides.image4}
          alt={""}
          className={classNames(sty.image4)}
          displayHeight={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("auto" as const)
              : ("auto" as const)
          }
          displayMaxHeight={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("400px" as const)
              : ("400px" as const)
          }
          displayMaxWidth={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("100%" as const)
              : ("100%" as const)
          }
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("354px" as const)
              : ("750px" as const)
          }
          loading={"lazy" as const}
          src={(() => {
            try {
              return $ctx.fetchDyanamicData.records[0].fields.image4[0].url;
            } catch (e) {
              if (e instanceof TypeError) {
                return undefined;
              }
              throw e;
            }
          })()}
        />
      </p.PlasmicLink>

      <div
        data-plasmic-name={"paragraph5"}
        data-plasmic-override={overrides.paragraph5}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.paragraph5
        )}
      >
        {(() => {
          try {
            return $ctx.fetchDyanamicData.records[0].fields.paragraph5;
          } catch (e) {
            if (e instanceof TypeError) {
              return "Enter some text";
            }
            throw e;
          }
        })()}
      </div>

      <p.PlasmicLink
        className={classNames(projectcss.all, projectcss.a, sty.link__ss3Xt)}
        component={Link}
        href={(() => {
          try {
            return $ctx.fetchDyanamicData.records[0].fields["Step 2 URL"];
          } catch (e) {
            if (e instanceof TypeError) {
              return undefined;
            }
            throw e;
          }
        })()}
        platform={"nextjs"}
      >
        <p.PlasmicImg
          data-plasmic-name={"image5"}
          data-plasmic-override={overrides.image5}
          alt={""}
          className={classNames(sty.image5)}
          displayHeight={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("auto" as const)
              : ("auto" as const)
          }
          displayMaxHeight={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("400px" as const)
              : ("400px" as const)
          }
          displayMaxWidth={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("100%" as const)
              : ("100%" as const)
          }
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("354px" as const)
              : ("750px" as const)
          }
          loading={"lazy" as const}
          src={(() => {
            try {
              return $ctx.fetchDyanamicData.records[0].fields.image5[0].url;
            } catch (e) {
              if (e instanceof TypeError) {
                return undefined;
              }
              throw e;
            }
          })()}
        />
      </p.PlasmicLink>

      <div
        data-plasmic-name={"paragraph6"}
        data-plasmic-override={overrides.paragraph6}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.paragraph6
        )}
      >
        {(() => {
          try {
            return $ctx.fetchDyanamicData.records[0].fields.paragraph6;
          } catch (e) {
            if (e instanceof TypeError) {
              return "Enter some text";
            }
            throw e;
          }
        })()}
      </div>

      <PlasmicHead
        data-plasmic-name={"head"}
        data-plasmic-override={overrides.head}
        className={classNames("__wab_instance", sty.head)}
      />

      <p.PlasmicLink
        className={classNames(projectcss.all, projectcss.a, sty.link__dQhKa)}
        component={Link}
        href={(() => {
          try {
            return $ctx.fetchDyanamicData.records[0].fields["Step 2 URL"];
          } catch (e) {
            if (e instanceof TypeError) {
              return undefined;
            }
            throw e;
          }
        })()}
        platform={"nextjs"}
      >
        <p.PlasmicImg
          data-plasmic-name={"image6"}
          data-plasmic-override={overrides.image6}
          alt={""}
          className={classNames(sty.image6)}
          displayHeight={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("auto" as const)
              : ("auto" as const)
          }
          displayMaxHeight={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("400px" as const)
              : ("400px" as const)
          }
          displayMaxWidth={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("100%" as const)
              : ("100%" as const)
          }
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("354px" as const)
              : ("750px" as const)
          }
          loading={"lazy" as const}
          src={(() => {
            try {
              return $ctx.fetchDyanamicData.records[0].fields.image6[0].url;
            } catch (e) {
              if (e instanceof TypeError) {
                return undefined;
              }
              throw e;
            }
          })()}
        />
      </p.PlasmicLink>

      <div
        data-plasmic-name={"paragraph7"}
        data-plasmic-override={overrides.paragraph7}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.paragraph7
        )}
      >
        {(() => {
          try {
            return $ctx.fetchDyanamicData.records[0].fields.paragraph7;
          } catch (e) {
            if (e instanceof TypeError) {
              return "Enter some text";
            }
            throw e;
          }
        })()}
      </div>

      {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          <div
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            className={classNames(projectcss.all, sty.columns)}
          >
            <div className={classNames(projectcss.all, sty.column__huOnM)}>
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__chJfK
                )}
                component={Link}
                href={(() => {
                  try {
                    return $ctx.fetchDyanamicData.records[0].fields[
                      "Step 2 URL"
                    ];
                  } catch (e) {
                    if (e instanceof TypeError) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
                platform={"nextjs"}
              >
                {(() => {
                  try {
                    return $ctx.fetchDyanamicData.records[0].fields.aCTA;
                  } catch (e) {
                    if (e instanceof TypeError) {
                      return "CLAIM FREE PODS";
                    }
                    throw e;
                  }
                })()}
              </p.PlasmicLink>
            </div>

            <div className={classNames(projectcss.all, sty.column__oHyP)}>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__tztr)}
                displayHeight={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? ("70%" as const)
                    : ("80%" as const)
                }
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? ("8px" as const)
                    : ("8px" as const)
                }
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/feed_next_ai/images/_4F0Afe7D15505Bfe240E785E7Ac88B6Cwebp.webp",
                  fullWidth: 3,
                  fullHeight: 90,
                  aspectRatio: undefined
                }}
              />
            </div>

            <div className={classNames(projectcss.all, sty.column__sAxoM)}>
              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text
                )}
              >
                {(() => {
                  try {
                    return $ctx.fetchDyanamicData.records[0].fields.aOutroH3;
                  } catch (e) {
                    if (e instanceof TypeError) {
                      return "Enter some text";
                    }
                    throw e;
                  }
                })()}
              </div>

              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__lvwbM)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/feed_next_ai/images/starpng.png",
                  fullWidth: 142,
                  fullHeight: 21,
                  aspectRatio: undefined
                }}
              />
            </div>
          </div>
        </div>
      ) : null}

      <p.PlasmicLink
        className={classNames(projectcss.all, projectcss.a, sty.link__gn3Dq)}
        component={Link}
        href={(() => {
          try {
            return $ctx.fetchDyanamicData.records[0].fields["Step 2 URL"];
          } catch (e) {
            if (e instanceof TypeError) {
              return undefined;
            }
            throw e;
          }
        })()}
        platform={"nextjs"}
      >
        <p.PlasmicImg
          data-plasmic-name={"image7"}
          data-plasmic-override={overrides.image7}
          alt={""}
          className={classNames(sty.image7)}
          displayHeight={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("auto" as const)
              : ("auto" as const)
          }
          displayMaxHeight={"400px" as const}
          displayMaxWidth={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("100%" as const)
              : ("100%" as const)
          }
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("354px" as const)
              : ("750px" as const)
          }
          loading={"lazy" as const}
          src={(() => {
            try {
              return $ctx.fetchDyanamicData.records[0].fields.image7[0].url;
            } catch (e) {
              if (e instanceof TypeError) {
                return undefined;
              }
              throw e;
            }
          })()}
        />
      </p.PlasmicLink>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  article1Body: [
    "article1Body",
    "heroHeadline",
    "heroSubHeadline",
    "heroImage",
    "paragraph1",
    "image1",
    "paragraph2",
    "image2",
    "paragraph3",
    "image3",
    "paragraph4",
    "image4",
    "paragraph5",
    "image5",
    "paragraph6",
    "head",
    "image6",
    "paragraph7",
    "freeBox",
    "columns",
    "text",
    "image7"
  ],
  heroHeadline: ["heroHeadline"],
  heroSubHeadline: ["heroSubHeadline"],
  heroImage: ["heroImage"],
  paragraph1: ["paragraph1"],
  image1: ["image1"],
  paragraph2: ["paragraph2"],
  image2: ["image2"],
  paragraph3: ["paragraph3"],
  image3: ["image3"],
  paragraph4: ["paragraph4"],
  image4: ["image4"],
  paragraph5: ["paragraph5"],
  image5: ["image5"],
  paragraph6: ["paragraph6"],
  head: ["head"],
  image6: ["image6"],
  paragraph7: ["paragraph7"],
  freeBox: ["freeBox", "columns", "text"],
  columns: ["columns", "text"],
  text: ["text"],
  image7: ["image7"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  article1Body: "div";
  heroHeadline: "div";
  heroSubHeadline: "div";
  heroImage: typeof p.PlasmicImg;
  paragraph1: "div";
  image1: typeof p.PlasmicImg;
  paragraph2: "div";
  image2: typeof p.PlasmicImg;
  paragraph3: "div";
  image3: typeof p.PlasmicImg;
  paragraph4: "div";
  image4: typeof p.PlasmicImg;
  paragraph5: "div";
  image5: typeof p.PlasmicImg;
  paragraph6: "div";
  head: typeof PlasmicHead;
  image6: typeof p.PlasmicImg;
  paragraph7: "div";
  freeBox: "div";
  columns: "div";
  text: "div";
  image7: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBodyArticle1__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBodyArticle1__VariantsArgs;
    args?: PlasmicBodyArticle1__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBodyArticle1__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBodyArticle1__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicBodyArticle1__ArgProps,
          internalVariantPropNames: PlasmicBodyArticle1__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicBodyArticle1__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "article1Body") {
    func.displayName = "PlasmicBodyArticle1";
  } else {
    func.displayName = `PlasmicBodyArticle1.${nodeName}`;
  }
  return func;
}

export const PlasmicBodyArticle1 = Object.assign(
  // Top-level PlasmicBodyArticle1 renders the root element
  makeNodeComponent("article1Body"),
  {
    // Helper components rendering sub-elements
    heroHeadline: makeNodeComponent("heroHeadline"),
    heroSubHeadline: makeNodeComponent("heroSubHeadline"),
    heroImage: makeNodeComponent("heroImage"),
    paragraph1: makeNodeComponent("paragraph1"),
    image1: makeNodeComponent("image1"),
    paragraph2: makeNodeComponent("paragraph2"),
    image2: makeNodeComponent("image2"),
    paragraph3: makeNodeComponent("paragraph3"),
    image3: makeNodeComponent("image3"),
    paragraph4: makeNodeComponent("paragraph4"),
    image4: makeNodeComponent("image4"),
    paragraph5: makeNodeComponent("paragraph5"),
    image5: makeNodeComponent("image5"),
    paragraph6: makeNodeComponent("paragraph6"),
    head: makeNodeComponent("head"),
    image6: makeNodeComponent("image6"),
    paragraph7: makeNodeComponent("paragraph7"),
    freeBox: makeNodeComponent("freeBox"),
    columns: makeNodeComponent("columns"),
    text: makeNodeComponent("text"),
    image7: makeNodeComponent("image7"),

    // Metadata about props expected for PlasmicBodyArticle1
    internalVariantProps: PlasmicBodyArticle1__VariantProps,
    internalArgProps: PlasmicBodyArticle1__ArgProps
  }
);

export default PlasmicBodyArticle1;
/* prettier-ignore-end */
