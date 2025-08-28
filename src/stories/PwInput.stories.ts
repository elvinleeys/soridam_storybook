import type { Meta, StoryObj } from "@storybook/nextjs";
import PwInput from "../design-system/atom/pwInput/PwInput";

const meta: Meta<typeof PwInput> = {
  title: "Atom/Login/PwInput",
  component: PwInput,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "text",
      description:
        "입력창의 값(value). 외부 상태와 연동하여 Controlled Input으로 사용",
    },
    onChange: {
      action: "changed",
      description: "입력값 변경 시 호출되는 이벤트 핸들러(onChange)",
    },
    placeholder: {
      control: "text",
      description: "비밀번호 입력창에 표시되는 안내 문구(placeholder)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof PwInput>;

export const Default: Story = {
  args: {
    value: "",
    placeholder: "비밀번호",
  },
};

export const WithCustomPlaceholder: Story = {
  args: {
    value: "",
    placeholder: "비밀번호를 입력해주세요",
  },
};
