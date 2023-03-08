// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ewmXQJz5QcseZaj8LdYn4d
// Component: p006x18VMOjaEw
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
import TextInput from "../../TextInput"; // plasmic-import: UM6_riS_RweTc1/component
import Button from "../../Button"; // plasmic-import: a7t_FgmCzIKas/component

import { useScreenVariants as useScreenVariantspm7PaVxsIGwRo0 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Pm7PAVxsIGwRo0/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_feed_next_ai.module.css"; // plasmic-import: ewmXQJz5QcseZaj8LdYn4d/projectcss
import sty from "./PlasmicSqueezeForm.module.css"; // plasmic-import: p006x18VMOjaEw/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: ULH4JZnpbE0Lps/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: vO_TNensXwgSH-/icon

export type PlasmicSqueezeForm__VariantMembers = {};
export type PlasmicSqueezeForm__VariantsArgs = {};
type VariantPropType = keyof PlasmicSqueezeForm__VariantsArgs;
export const PlasmicSqueezeForm__VariantProps = new Array<VariantPropType>();

export type PlasmicSqueezeForm__ArgsType = {};
type ArgPropType = keyof PlasmicSqueezeForm__ArgsType;
export const PlasmicSqueezeForm__ArgProps = new Array<ArgPropType>();

export type PlasmicSqueezeForm__OverridesType = {
  root?: p.Flex<"form">;
  textInput?: p.Flex<typeof TextInput>;
  textInput2?: p.Flex<typeof TextInput>;
  textInput3?: p.Flex<typeof TextInput>;
  button?: p.Flex<typeof Button>;
};

export interface DefaultSqueezeFormProps {
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

function PlasmicSqueezeForm__RenderFunc(props: {
  variants: PlasmicSqueezeForm__VariantsArgs;
  args: PlasmicSqueezeForm__ArgsType;
  overrides: PlasmicSqueezeForm__OverridesType;

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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => undefined
          : undefined
      },
      {
        path: "textInput2.value",
        type: "private",
        variableType: "text",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => undefined
          : undefined
      },
      {
        path: "textInput3.value",
        type: "private",
        variableType: "text",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) =>
              (() => {
                try {
                  return $ctx.fetchDyanamicData.id;
                } catch (e) {
                  if (e instanceof TypeError) {
                    return undefined;
                  }
                  throw e;
                }
              })()
          : undefined
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantspm7PaVxsIGwRo0()
  });

  return (
    <form
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      action={
        "https://hook.us1.make.com/5mordka6hk6nytd9doqnbe6kbf4r3drk" as const
      }
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
      method={"post" as const}
    >
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text___0EtoU
        )}
      >
        {(() => {
          try {
            return $ctx.fetchDyanamicData.records[0].fields.sH5;
          } catch (e) {
            if (e instanceof TypeError) {
              return "Enter some text";
            }
            throw e;
          }
        })()}
      </div>

      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__htv4G
        )}
      >
        {(() => {
          try {
            return $ctx.fetchDyanamicData.records[0].fields.sH4;
          } catch (e) {
            if (e instanceof TypeError) {
              return "Enter some text";
            }
            throw e;
          }
        })()}
      </div>

      <TextInput
        data-plasmic-name={"textInput"}
        data-plasmic-override={overrides.textInput}
        aria-label={"email" as const}
        className={classNames("__wab_instance", sty.textInput)}
        name={"email" as const}
        onChange={(...args) => {
          p.generateStateOnChangeProp($state, ["textInput", "value"])(
            (e => e.target?.value).apply(null, args)
          );
        }}
        placeholder={"📧 Your Email Address" as const}
        value={p.generateStateValueProp($state, ["textInput", "value"])}
      />

      <TextInput
        data-plasmic-name={"textInput2"}
        data-plasmic-override={overrides.textInput2}
        aria-label={"phone" as const}
        className={classNames("__wab_instance", sty.textInput2)}
        name={"phone" as const}
        onChange={(...args) => {
          p.generateStateOnChangeProp($state, ["textInput2", "value"])(
            (e => e.target?.value).apply(null, args)
          );
        }}
        placeholder={"📲 Your Phone Number" as const}
        value={p.generateStateValueProp($state, ["textInput2", "value"])}
      />

      {true
        ? (() => {
            $state.registerInitFunc(
              "textInput3.value",
              true
                ? ({ $props, $state, $queries }) =>
                    (() => {
                      try {
                        return $ctx.fetchDyanamicData.id;
                      } catch (e) {
                        if (e instanceof TypeError) {
                          return undefined;
                        }
                        throw e;
                      }
                    })()
                : undefined,
              []
            );

            return (
              <TextInput
                data-plasmic-name={"textInput3"}
                data-plasmic-override={overrides.textInput3}
                aria-label={"record_id" as const}
                className={classNames("__wab_instance", sty.textInput3)}
                name={"record_id" as const}
                onChange={(...args) => {
                  p.generateStateOnChangeProp($state, ["textInput3", "value"])(
                    (e => e.target?.value).apply(null, args)
                  );
                }}
                value={p.generateStateValueProp($state, [
                  "textInput3",

                  "value"
                ])}
              />
            );
          })()
        : null}

      <Button
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        className={classNames("__wab_instance", sty.button)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__yaVvU
          )}
        >
          {"Get Offer"}
        </div>
      </Button>

      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__te7Mi
        )}
      >
        {hasVariant(globalVariants, "screen", "mobileOnly")
          ? "I agree to receive emails and texts."
          : "I agree to receive emails and texts."}
      </div>
    </form>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "textInput", "textInput2", "textInput3", "button"],
  textInput: ["textInput"],
  textInput2: ["textInput2"],
  textInput3: ["textInput3"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "form";
  textInput: typeof TextInput;
  textInput2: typeof TextInput;
  textInput3: typeof TextInput;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSqueezeForm__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSqueezeForm__VariantsArgs;
    args?: PlasmicSqueezeForm__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSqueezeForm__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSqueezeForm__ArgsType,
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
          internalArgPropNames: PlasmicSqueezeForm__ArgProps,
          internalVariantPropNames: PlasmicSqueezeForm__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicSqueezeForm__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSqueezeForm";
  } else {
    func.displayName = `PlasmicSqueezeForm.${nodeName}`;
  }
  return func;
}

export const PlasmicSqueezeForm = Object.assign(
  // Top-level PlasmicSqueezeForm renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textInput: makeNodeComponent("textInput"),
    textInput2: makeNodeComponent("textInput2"),
    textInput3: makeNodeComponent("textInput3"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicSqueezeForm
    internalVariantProps: PlasmicSqueezeForm__VariantProps,
    internalArgProps: PlasmicSqueezeForm__ArgProps
  }
);

export default PlasmicSqueezeForm;
/* prettier-ignore-end */
