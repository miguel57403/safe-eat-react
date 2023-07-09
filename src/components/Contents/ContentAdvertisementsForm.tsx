import { useState, useEffect } from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Space,
  Upload,
  UploadFile,
} from "antd";
import { FontsDefault } from "assets/fonts/Fonts";
import { StyledContentP } from "./styled";
import { useParams } from "react-router-dom";
import { RcFile } from "antd/es/upload";
import { PlusOutlined } from "@ant-design/icons";

export const ContentAdvertisementsForm = () => {
  const params = useParams();
  const isUpdating = !!params.id;
  // TODO: Use the id to get the name
  const name = "Advertisement one";

  return (
    <StyledContentP>
      <FontsDefault.H2 className="title-content" fontsSize={32} color="black">
        {isUpdating ? "Advertisements: " + name : "Advertisements: new"}
      </FontsDefault.H2>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "calc(100vh - 20px - 100px)",
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AdvertisementsForm
          isUpdating={isUpdating}
          onSubmit={(values) => {
            console.log(values);
          }}
        />
      </div>
    </StyledContentP>
  );
};

type AdvertisementsFormProps = {
  isUpdating: boolean;
  onSubmit: (values: AdvertisementsFormValues) => void;
};

function AdvertisementsForm({ isUpdating, onSubmit }: AdvertisementsFormProps) {
  const [categories, setCategories] = useState<Option[]>([]);
  const [ingredients, setIngredients] = useState<Option[]>([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  useEffect(() => {
    async function loadIngredients() {
      // TODO: fetch ingredients from the API
      const ingredientsFake: Option[] = Array.from({ length: 10 }, (_, i) => ({
        id: i.toString(),
        name: `Ingredient ${i}`,
      }));

      setIngredients(ingredientsFake);
    }

    loadIngredients();
  }, []);

  useEffect(() => {
    async function loadCategories() {
      // TODO: fetch categories from the API
      const categoriesFake: Option[] = [
        { id: "1", name: "Ice Cream" },
        { id: "2", name: "Pizza" },
        { id: "3", name: "Burger" },
      ];

      setCategories(categoriesFake);
    }

    loadCategories();
  }, []);

  const handleCancel = () => setPreviewOpen(false);

  const onFinish = (values: AdvertisementsFormValues) => {
    onSubmit(values);
  };

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      style={{
        maxWidth: 600,
        minWidth: 400,
        border: "1px solid #ccc",
        padding: "16px",
        borderRadius: "8px",
      }}
      initialValues={{ remember: true }}
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off"
      requiredMark={true}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Name is required" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Image"
        name="image"
        rules={[{ required: true, message: "Image is required" }]}
      >
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          maxCount={1}
          onPreview={handlePreview}
          onChange={({ fileList: newFileList }) => setFileList(newFileList)}
        >
          {fileList.length != 0 ? null : (
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          )}
        </Upload>
        <Modal
          open={previewOpen}
          title={previewTitle}
          footer={null}
          onCancel={handleCancel}
        >
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          {isUpdating ? "Update" : "Create"}
        </Button>
      </Form.Item>
    </Form>
  );
}

type Option = {
  id: string;
  name: string;
};

type AdvertisementsFormValues = {
  name: string;
  image: string;
};

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
